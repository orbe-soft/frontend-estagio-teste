import Image from "next/image";
import Search from "../search/search";
import CartButton from "../buttons/cart-btn/cart-btn";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container-logo">
        <Link href={"/"}>
          <Image
            className="logo"
            src={"/logo.webp"}
            width={740}
            height={440}
            alt="Bike Store Logo"
            priority={true}
          />
        </Link>
      </div>
      <div className="container-search">
        <Search />
      </div>
      <div className="container-cart-btn">
        <CartButton />
      </div>
    </header>
  );
}
