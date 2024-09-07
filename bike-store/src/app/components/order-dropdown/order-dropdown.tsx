import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function OrderDropdown({ onOrderChange }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOrderChange = (order: string) => {
    onOrderChange(order);
    setIsOpen(false);
  };

  return (
    <div className="container-dropdown">
      <div className="container-dropdown-btn">
        <button onClick={() => setIsOpen(!isOpen)}>
          Organizar por{" "}
          <span>
            <FiChevronDown />
          </span>
        </button>
      </div>
      <div
        className="container-order-list"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <button onClick={() => handleOrderChange("DESC")}>
          Preço: Maior - menor
        </button>
        <button onClick={() => handleOrderChange("ASC")}>
          Preço: Menor - maior
        </button>
      </div>
    </div>
  );
}
