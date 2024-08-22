import { useQueryParamsStore } from "@/app/utils/hooks/useQueryParamsStore"
import { QueryParams } from "@/app/utils/types/intefaces"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

type orderButtonProps ={
    orderType:QueryParams["order"],
    title:string,
    onClick:()=>void
}

export default function PriceFilter(){
    const[open,setOpen]= useState<boolean>(false)
    const{queryParams, setQueryParams}=useQueryParamsStore()

    
    const OrderButton = ({orderType,title,onClick}:orderButtonProps)=>( 
    <button className={`${orderType === queryParams.order ? "text-slate-800":""}`} onClick={onClick}>{title}</button>
    )

    
    return(
        <div>
          <div className="*:text-gray-500 group *:transition-transform relative">
            <button className="flex gap-2 items-center cursor-pointer" onClick={()=>setOpen(!open)}>
                <p>Organizar por </p> <ChevronDown size={16} className=" transition-transform group-open:rotate-180"/>
            </button>
                <div className={`p-4 w-max transition-opacity border mt-2 border-gray-100 bg-white shadow-lg rounded-md absolute right-0 z-20 gap-2 flex flex-col ${open ? "opacity-100":"opacity-0 pointer-events-none"} `}>

                    <OrderButton title="Preço: Maior - Menor" orderType="DESC" onClick={()=>setQueryParams({...queryParams, order:"DESC"})}/> 
                    <OrderButton title="Preço: Menor - Maior" orderType="ASC" onClick={()=>setQueryParams({...queryParams, order:"ASC"})}/> 

                </div>   
          </div>
        </div>
    )
}
