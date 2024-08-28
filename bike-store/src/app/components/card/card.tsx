import Image from "next/image";
import Link from "next/link";

export default function AddCartButton(props: any) {
  return (
    <div className="card">
      <Link href={`/product/${props.id}`}>
        <div className="container-card-image">
          <Image
            className="card-image"
            src={props.image}
            width={640}
            height={480}
            alt={`Bicicleta ${props.product_name}`}
            priority={true}
          />
        </div>
        <div className="container-info-product-card">
          <h2>{props.brand}</h2>
          <ul>
            <li>{props.product_name}</li>
            <li>R$ {props.price}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
