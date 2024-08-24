"use client";

import { fetchData } from "@/app/services/api";
import { Suspense, useEffect, useState } from "react";
import { Product } from "./models/products";
import { useSearchParams } from "next/navigation";
import Card from "@/app/components/card/card";
import OrderDropdown from "./components/order-dropdown/order-dropdown";
import BrandNav from "./components/brand-nav/band-nav";
import Loading from "./loading";

export default function Catalog() {
  const [data, setData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const brand = searchParams.get("brand") || "todas as marcas";
    setSelectedBrand(brand);

    const fetchDataAsync = async () => {
      try {
        const response = await fetchData("/products");
        if (brand === "todas as marcas") {
          setData(response.content);
        }
      } catch (error) {
        console.error(error);
        throw new Error("Erro ao buscar os dados");
      }
    };
    fetchDataAsync();
  }, [searchParams]);

  const getDataByBrand = async (brand: string) => {
    setSelectedBrand(brand);
    try {
      if (brand && brand !== "todas as marcas") {
        const response = await fetchData(`/products?brand=${brand}`);
        setData(response.content);
      }
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao buscar os dados");
    }
  };

  const sortDataByPrice = async (order: string) => {
    try {
      const response = await fetchData(`/products?order=${order}`);
      setData(response.content);
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao buscar os dados");
    }
  };

  return (
    <div className="grid grid-rows-1">
      <div className="container-brand-nav">
        <BrandNav onBrandChange={getDataByBrand} />
        <div>
          <OrderDropdown onOrderChange={sortDataByPrice} />
        </div>
      </div>
      <div className="container-catalog">
        <Suspense fallback={<Loading />}>
          <ul className="products-list">
            {data.map((item: Product) => (
              <li key={item.id}>
                <Card
                  id={item.id}
                  brand={item.brand}
                  product_name={item.name}
                  price={item.price}
                  image={item.images[0].url}
                />
              </li>
            ))}
          </ul>
        </Suspense>
      </div>
      <div className="container-pagination"></div>
    </div>
  );
}
