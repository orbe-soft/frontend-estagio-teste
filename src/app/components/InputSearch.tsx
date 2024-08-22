"use client"
import { useQuery } from "@tanstack/react-query"
import {Search} from "lucide-react"
import { QueryParams } from "../utils/types/intefaces"
import { fetchProductData } from "../utils/hooks/hooks"
import { useState } from "react"
import { dataProps, ProductInfoProps } from "../utils/types/Props"
import useOnclickOutside from "react-cool-onclickoutside"
import { FormatCurrency } from "../utils/functions/format-currency"
import Link from "next/link"

type params = {
    params:QueryParams[]
}

export default function InputSearch(){
    
    const[query,setParams]=useState<QueryParams>({})

    const [openMenu, setOpenMenu] = useState(false);

    const ref = useOnclickOutside(() => {
        setOpenMenu(false);
      });

    const {data:searchResponse} = useQuery({
        queryKey:['searchProducts ',query],
        queryFn:()=>{

            if(Object.keys(query).length === 0 ){
                return 
            }
            return fetchProductData(query)
        }
      })

      function handleSearch(name:string){
        setOpenMenu(true)
        setParams({name:name})

      }

     

    return(
        <div className={`py-3 px-4 bg-gray-100 rounded-lg flex items-center lg:min-w-72   relative ${openMenu && "rounded-b-none"}`}  
        onMouseOver={()=>setOpenMenu(true)} 
        onMouseLeave={()=>setOpenMenu(false)}>
            
            <input className="w-full bg-transparent text-sm placeholder:text-gray-500 focus-visible:outline-none" placeholder="Pesquise aqui" onChange={(e)=> handleSearch(e.target.value)}/>
            <Search color="gray" size={20}/>  

            {
                openMenu &&
                <div ref={ref} className="position absolute mt-10 inset-0 h-max 0 bg-gray-100  rounded-b-lg p-2 z-10 flex flex-col gap-2">
                {
                searchResponse ? 
                    searchResponse.content.map(item =>(
                        <Link  href={`/products/${item.id}`} onClick={()=>setOpenMenu(false)}>
                        <div
                        key={item.id}
                        className="p-3 rounded-lg bg-white flex justify-between"
                        >
                        <p className="text-nowrap overflow-hidden text-ellipsis">{item.name}</p>
                        <p className="font-semibold ">{FormatCurrency(item.price)}</p>
                        </div>
                        </Link>
                    ))
                    :""
                }
            </div>
            }
        </div>
    )
}