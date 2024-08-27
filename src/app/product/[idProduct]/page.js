"use client";
import styles from "./page.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../../components/header";
import { ProductInfo } from "../../../components/productInfo";
import { ProductInfoContext } from "../../../contexts/ProductInfoContext";

export default function Product({ params }) {
  const [productInfo, setProductInfo] = useState();

  const getProductInfo = () => {
    axios({
      method: "get",
      url: `https://api-frontend-test.orbesoft.com.br/api/products/${params.idProduct}`,
    }).then((response) => {
      setProductInfo(response.data);
    });
  };

  const productInfoContextValues = { productInfo };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <ProductInfoContext.Provider value={productInfoContextValues}>
      <section>
        <Header />
        <section className={styles.container}>
          <p></p>
          <ProductInfo />
        </section>
      </section>
    </ProductInfoContext.Provider>
  );
}
