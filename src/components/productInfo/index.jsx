"use client";
import styles from "./productInfo.module.scss";
import Image from "next/image";
import { ProductInfoContext } from "../../contexts/ProductInfoContext";
import { useRouter } from "next/navigation";
import { LuShoppingBag } from "react-icons/lu";
import { RiArrowGoBackFill } from "react-icons/ri";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export function ProductInfo() {
  const router = useRouter();

  return (
    <ProductInfoContext.Consumer>
      {({ productInfo }) => {
        if (!productInfo) return;

        const principalImage = productInfo.images[0].url;

        const handleProductClick = () => {
          router.push("/");
        };

        return (
          <div key={productInfo.id} className={styles.container}>
            <p className={styles.backPage} onClick={handleProductClick}>
              <RiArrowGoBackFill /> Voltar
            </p>
            <div className={styles.containerDescription}>
              <div className={styles.containerImg}>
                <Image
                  src={principalImage}
                  alt={productInfo.name}
                  width={250}
                  height={340}
                />
                <div className={styles.imageSequence}>
                  {productInfo.images.map((image) => (
                    <Image
                      src={image.url}
                      alt={productInfo.name}
                      className={styles.img}
                      width={250}
                      height={340}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.descriptionBrand}>
                <div className={styles.descriptionProduct}>
                  <p>{productInfo.brand}</p>
                  <h1>{productInfo.name}</h1>
                  <h3>R$ {productInfo.price}</h3>
                  <p>
                    *Frete de R$40,00 para todo o Brasil, Grátis para compras
                    acima de R$900,00.
                  </p>
                </div>
                <div className={styles.description}>
                  <h3>DESCRIÇÃO</h3>
                  <p>{productInfo.description}</p>
                  <span>
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaPinterest />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </span>
                </div>
                <button className={styles.addCart}>
                  <LuShoppingBag />
                  ADICIONAR AO CARRINHO
                </button>
              </div>
            </div>
          </div>
        );
      }}
    </ProductInfoContext.Consumer>
  );
}
