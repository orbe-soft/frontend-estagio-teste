"use client";

import styles from "./productList.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductsContext } from "../../contexts/ProductsContext";

export function ProductList() {
  const router = useRouter();

  const urlParams = new URLSearchParams(window.location.search);
  const filterProductByName = urlParams.get("product");

  console.log(filterProductByName);

  return (
    <ProductsContext.Consumer>
      {({ products, productBrandsSelected }) => {
        const productList = products.filter(
          (product) =>
            (productBrandsSelected === null && !filterProductByName) ||
            productBrandsSelected === product.brand ||
            (product.name?.toLowerCase() || "") ===
              (filterProductByName?.toLowerCase() || "")
        );

        if (productList.length === 0) {
          return (
            <div className={styles.containerProduct}>
              <p>O produto "{filterProductByName}" não foi encontrado!</p>
            </div>
          );
        }

        return (
          <div className={styles.containerProduct}>
            {productList.map((product) => {
              const { url: imageUrl } = product.images[0];
              const handleProductClick = () => {
                router.push(`/product/${product.id}`);
              };

              return (
                <div
                  key={product.id}
                  className={styles.product}
                  onClick={handleProductClick}
                >
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={255}
                    height={366}
                  />

                  <p>{product.brand}</p>

                  <div className={styles.price}>
                    <p>{product.name}</p>
                    <p>R$ {product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }}
    </ProductsContext.Consumer>
  );
}
