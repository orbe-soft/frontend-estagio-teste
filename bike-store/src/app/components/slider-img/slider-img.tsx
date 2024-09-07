import { Product } from "@/app/models/products";
import { fetchData } from "@/app/services/api";
import Image from "next/image";

export default async function AsNavFor(props: { id: string }) {
  const product: Product = await fetchData(`/products/${props.id}`);

  return (
    <div className="slider-container">
      {product.images.map((item) => (
        <Image
          className="product-image"
          key={item.id}
          src={item.url}
          width={640}
          height={480}
          alt={"imagem do produto"}
        ></Image>
      ))}
    </div>
  );
}
