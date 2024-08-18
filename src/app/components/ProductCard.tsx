import Image from "next/image"

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
    console.log(data)
    const Images = data.images.slice(0,2)
    return(
        <div className="flex-auto basis-64 ">
          <div className="relative  ">
          {Images.map(item=>(
                <Image 
                src={item.url}
                className="w-full inset-0 first-of-type:hover:opacity-0 first:transition first:absolute"
                alt={item.order_id}
                width={300}
                height={600}
                />
            ))}
          </div>
            <div className="flex justify-between items-end pb-5">
                <div>
                    <span className="text-xs text-gray-500">{data.brand}</span>
                    <p className="text-sm text-gray-800">{data.name}</p>
                </div>
                <p className="text-sm font-bold text-gray-800">{data.price}</p>
            </div>
        </div>
    )
}