import Link from "next/link";
import { useState } from "react";

export default function OrderDropdown(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Organizar por</button>
      <ul style={{ display: isOpen ? "block" : "none" }}>
        <li>
          <Link
            href={{
              pathname: "/",
              query: { order: 'ASC'  },
            }}
          >
            Preço: Maior - menor
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/",
              query: { order: 'DESC' },
            }}
          >
            Preço: Menor - maior
          </Link>
        </li>
      </ul>
    </>
  );
}
