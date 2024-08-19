import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { FormatCurrency } from "../utils/functions/format-currency"

export type ProductInfoProps ={
   
    id:string,
    name:string,
    brand:string,
    images:imageProps[],
    description:string,
    price:number,
   
}
type dataProps ={
    data:ProductInfoProps,
}
type imageProps = {
    id:string,
    url:string,
    order_id:string,
}

export default function ProductCard({data}:dataProps){
 
    const Images = data.images.slice(0,2)

    return(
        <div className="flex-auto basis-64 ">
          <div className="relative group *:">
          {Images.map(item=>(
                <Image 
                src={item.url}
                className="w-full inset-0 first-of-type:group-hover:opacity-0 transition first:absolute"
                alt={item.order_id}
                width={300}
                height={600}
                />
            ))}

            <div className="flex absolute inset-0 items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 ">
                <button className="group/button rounded-full bg-white hover:bg-brandPrimary *:text-black p-4 translate-y-4 group-hover:translate-y-0  transition-all duration-300">
                        <ShoppingCart size={20} className="group-hover/button:text-white"/>
                </button>
            </div>
          </div>
            <div className="flex justify-between items-end pb-5">
                <div className="min-w-[65%]">
                    <span className="text-xs text-gray-500">{data.brand}</span>
                    <p className="text-sm text-gray-800 overflow-hidden text-nowrap overflow-ellipsis max-w-52">{data.name}</p>
                </div>
                <p className="text-sm font-bold text-gray-800">{FormatCurrency(data.price)}</p>
            </div>
        </div>
    )
}