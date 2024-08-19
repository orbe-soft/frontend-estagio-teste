import { ShoppingBag } from "lucide-react"

type Props ={
    title:string
}
export default function Button({title}:Props){
    return(
        <button className="bg-brandPrimary *:text-white *:uppercase flex gap-4 items-center w-fit px-12 py-2 rounded-md">
                <ShoppingBag size={20}/> <p>{title}</p>
        </button>
    )
}