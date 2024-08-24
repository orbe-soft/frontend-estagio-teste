import Image from "next/image";
import Link from "next/link";

export default function AddCartButton(props: any) {
  return (
    <div className="container-card">
      <Link href={`/product/${props.id}`}>
        <div className="container-card-image">
          <Image
            className="card-image"
            src={props.image}
            width={255}
            height={314}
            alt={`Bicicleta ${props.product_name}`}
          />
        </div>
        <div className="container-info-product-card">
          <ul>
            <li>{props.brand}</li>
            <li>{props.product_name}</li>
            <li>{props.price}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
