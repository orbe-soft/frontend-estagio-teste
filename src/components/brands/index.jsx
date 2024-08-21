import styles from "./brands.module.scss";
import { useState, useContext } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { ProductsContext } from "../../contexts/ProductsContext";

export function Brands() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { products, setProductBrandsSelected } = useContext(ProductsContext);

  const handleBrandClick = (brand) => {
    setProductBrandsSelected(brand);
    if (window.innerWidth <= 730) {
      setIsMenuOpen(false); // Fecha o menu em telas menores
    }
  };

  const handleAllBrandsClick = () => {
    setProductBrandsSelected(null);
    if (window.innerWidth <= 730) {
      setIsMenuOpen(false);
    }
  };

  let brands = [];

  for (const product of products) {
    if (brands.find((brand) => brand === product.brand)) continue;
    brands.push(product.brand);
  }

  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.open : ""}`}>
      <div
        className={styles.menuToggle}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </div>

      <div className={styles.allBrands}>
        <p onClick={handleAllBrandsClick}>TODAS AS MARCAS</p>
        <div className={styles.brands}>
          {brands.map((brand) => (
            <p key={brand} onClick={() => handleBrandClick(brand)}>
              {brand}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.organization}>
        Organizado por <MdKeyboardArrowDown />
      </div>
    </div>
  );
}
