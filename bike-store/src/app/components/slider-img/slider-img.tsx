import { Product } from "@/app/models/products";
import { fetchData } from "@/app/services/api";
import Image from "next/image";

export default async function AsNavFor(props: { id: string }) {
  const product: Product = await fetchData(`/products/${props.id}`);

  return (
    <div className="slider-container">
      {product.images.map((item) => (
        <Image
          key={item.id}
          src={item.url}
          width={200}
          height={200}
          alt={""}
        ></Image>
      ))}
    </div>
  );
}
