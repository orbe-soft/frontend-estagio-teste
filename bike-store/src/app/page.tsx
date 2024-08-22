"use client";

import { fetchData } from "@/app/services/api";
import { useEffect, useState } from "react";
import { Product } from "./models/products";
import Card from "@/app/components/card/card";
import Pagination from "@/app/components/pagination/pagination";
import Link from "next/link";
import OrderDropdown from "./components/order-dropdown/order-dropdown";

export default function Catalog() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData("/products");
        setData(response.content);
      } catch (error) {
        console.error("Erro ao buscar os dados", error);
      }
    };
    fetchDataAsync();
  }, []);

  const brands = ["todas as marcas", "caloi", "krw"];

  return (
    <div className="container">
      <div className="container-brand-nav">
        <nav className="brand-nav">
          <ul>
            {brands.map((brand) => (
              <li key={brand}>
                <Link
                  href={{
                    query: { brand: brand },
                  }}
                >
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
          <div>
            <OrderDropdown />
          </div>
      </div>
      <div className="container-catalog">
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
      </div>
      <div className="container-pagination">
        <Pagination />
      </div>
    </div>
  );
}
