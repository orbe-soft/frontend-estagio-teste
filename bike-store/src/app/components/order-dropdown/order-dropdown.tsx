import { useState } from "react";

export default function OrderDropdown({ onOrderChange }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOrderChange = (order: string) => {
    onOrderChange(order);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Organizar por</button>
      <ul style={{ display: isOpen ? "block" : "none" }}>
        <li onClick={() => handleOrderChange("DESC")}>Preço: Maior - menor</li>
        <li onClick={() => handleOrderChange("ASC")}>Preço: Menor - maior</li>
      </ul>
    </>
  );
}
