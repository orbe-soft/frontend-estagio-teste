"use client";
import styles from "./page.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../components/header/index";
import { Brands } from "../components/brands/index";
import { ProductList } from "../components/productList";
import { ProductsContext } from "../contexts/ProductsContext";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [productBrandsSelected, setProductBrandsSelected] = useState(null);

  const getProduct = () => {
    axios({
      method: "get",
      url: "https://api-frontend-test.orbesoft.com.br/api/products",
    }).then((response) => {
      setProducts(response.data.content);
    });
  };

  const productsContextValues = {
    products,
    productBrandsSelected,
    setProductBrandsSelected,
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductsContext.Provider value={productsContextValues}>
      <main className={styles.conatinerWebsite}>
        <section>
          <Header />
        </section>
        <section className={styles.containerMarg}>
          <Brands />
          <section className={styles.listBrands}>
            <ProductList />
          </section>
        </section>
      </main>
    </ProductsContext.Provider>
  );
}
