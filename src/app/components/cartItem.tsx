"use client"
import Image from "next/image"
import { FormatCurrency } from "../utils/functions/format-currency"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

type props={
    data:{
        name:string,
        brand:string,
        price:number,
        image:string
    }
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
    return(
        <div className="flex justify-between  py-6 border-b border-slate-300 last-of-type:border-b-0">
            <div className="flex gap-6 items-center">
                <Image
                src={data.image}
                width={140}
                height={140}
                alt={"imagem da " + data.name}
                className="object-cover h-[160px] w-[160px]"
                />
                <div className="">
                    <h1 className="text-xl font-semibold text-slate-800">{data.name}</h1>
                    <p className="font-light text-slate-500">{data.brand}</p>
                    <div className="flex gap-4 items-center mt-4">
                        <ButtonCounter/>

                        <button className="font-semibold uppercase text-brandPrimary hover:opacity-50">Remover</button>
                    </div>
                </div>
            </div>
                <p className="font-semibold text-slate-800">{FormatCurrency(data.price)}</p>
        </div>
    )
}