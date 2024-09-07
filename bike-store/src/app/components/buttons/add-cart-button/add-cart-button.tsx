import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";

export default function AddCartButton() {
  return (
    <>
      <button className="add-cart-button">
        <FiShoppingBag size={24} />
        <span>Adicionar ao carrrinho</span>
      </button>
    </>
  );
}
