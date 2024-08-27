import Logo from "../assets/logo.png";
import styles from "./header.module.scss";

import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { LuShoppingBag } from "react-icons/lu";

export function Header() {
  const urlParams = new URLSearchParams(window.location.search);
  const filterProductByName = urlParams.get("product") || "";

  const redirectByProductName = (event) => {
    event.preventDefault();

    const searchInput = event.target[0].value.trim();

    window.location.href = `/?product=${searchInput}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image className={styles.logoStyle} src={Logo} alt="logo" />
        <div className={styles.search}>
          <form onSubmit={redirectByProductName}>
            <input
              type="text"
              placeholder={
                filterProductByName.length > 0
                  ? `Pesquisando por: ${filterProductByName}`
                  : "Pesquise aqui!"
              }
            />
          </form>
          <BiSearch className={styles.searchIcon} />
        </div>

        <button className={styles.buttonShop}>
          <LuShoppingBag className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
