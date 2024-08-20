import { ShoppingBag } from "lucide-react"

type Props ={
    title:string
    type?:"success"
}
export default function Button({title, type}:Props){
    return(
        <button className={`${type == "success" ? "bg-green-500 w-auto justify-center":"bg-brandPrimary"} *:text-white *:uppercase flex gap-4 items-center w-fit px-12 py-2 rounded-md`}>
                {type!="success"&& <ShoppingBag size={20}/>} <p>{title}</p>
        </button>
    )
}