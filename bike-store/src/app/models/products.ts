export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  price: number;
  images: Array<ProductImages>;
}

interface ProductImages {
  id: string;
  url: string;
  order_id: string;
}
