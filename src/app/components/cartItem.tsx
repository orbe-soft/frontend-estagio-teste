"use client"
import Image from "next/image"
import { FormatCurrency } from "../utils/functions/format-currency"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import { ProductInfoProps } from "../utils/types/Props"

type props={
    data:ProductInfoProps
}
type CounterProps ={
    value:number
}
const ButtonCounter=()=>{
    const[count,setCount]=useState(1)

    function handleCount({type}:{type: "add" | "remove"}){
        if(type=="add"){
            setCount(count+1)
        }
        else if(type=="remove" && count > 1 ){
            setCount(count-1)
        }
    }

    return(
        <div className="flex *:flex-auto *:p-4  *:text-slate-800 border border-slate-300 rounded-md ">
            <button onClick={()=>handleCount({type:"remove"})}><Minus size={20} /></button>
            <input className="text-xl font-semibold max-w-10 bg-transparent focus-visible:outline-none text-center"  value={count} placeholder="1" readOnly/>
            <button onClick={()=>handleCount({type:"add"})}><Plus size={20}/></button>
        </div>
    )
}

export default function CartItem({data}:props){

    const image = data.images[1].url
    
    return(
        <div className="justify-between lg:flex-col py-6 border-b border-slate-300 last-of-type:border-b-0">
            <div className="flex flex-auto gap-6 sm:items-center flex-col md:flex-row">
                <Image
                src={image}
                width={140}
                height={140}
                alt={"imagem da " + data.name}
                className="object-cover h-[clamp(120px,5vw,160px)] w-[clamp(120px,5vw,160px)]"
                />
                <div className="flex flex-auto flex-col">
                    <div>
                        <div className="flex flex-wrap flex-1 justify-between">
                        <div>
                        <h1 className="text-xl font-semibold text-slate-800">{data.name}</h1>
                        <p className="font-light text-slate-500">{data.brand}</p>
                        </div>

                        <p className="font-semibold text-slate-800">{FormatCurrency(data.price)}</p>
                        </div>

                        <div className="flex gap-4 items-center mt-4">
                            <ButtonCounter/>

                            <button className="font-semibold  uppercase text-brandPrimary hover:opacity-50">Remover</button>
                        </div>
                    </div>
                </div>
            </div>
               
        </div>
    )
}