import Link from "next/link";
import Image from "next/image";

export default function CartButton() {
  return (
    <ul>
      <li>
        <Link href="/cart">
          <Image src={"/bag.svg"} width={24} height={24} alt="cart" />
        </Link>
      </li>
    </ul>
  );
}
