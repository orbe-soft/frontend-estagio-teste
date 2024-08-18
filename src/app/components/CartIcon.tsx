import { ShoppingBag } from "lucide-react";
type props ={
    quantity:number,

}

export default function CartIcon({quantity}:props){
    return(
        <div className="flex flex-col">
            <ShoppingBag color="gray" size={24}/>
            {
                quantity == 0 ? '':
                <span className="ml-3 -mt-2 p-1 rounded-full bg-brandPrimary text-xs inline-grid place-items-center font-medium text-white w-6 h-6 transition">
                {quantity}
            </span>
            }
        </div>
    )
}