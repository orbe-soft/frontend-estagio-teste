"use client"
import Button from "@/app/components/button";
import { API } from "@/app/utils/api";
import { FormatCurrency } from "@/app/utils/functions/format-currency";
import { ProductInfoProps } from "@/app/utils/types/Props";
import axios from "axios";
import { Undo2 } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Instagram, Pinterest,Facebook, Twitter } from "react-bootstrap-icons";

type paramsProps={
    params:ProductInfoProps
}


export default function Product({ params }: paramsProps ){
    const [fetchData, setFetchData] = useState<ProductInfoProps>()
    const[selectImg,setSelectedImg]= useState<string>("")
     
  useEffect(()=>{
    fetchProductData()

  },[])

  async function fetchProductData() {
    try {

      const {data} = await axios.get(`${API}/products/${params.id}`)
      setFetchData(data)
     
    } 
    catch (error) {
      console.error(error);
    }
  }
    return(
        <>
            
            <div className="flex flex-wrap [&>div]:flex-auto [&>div]:basis-[47%]  w-[-webkit-fill-available] h-full  gap-14  max-h-[550px]">
            <div className="flex gap-4 ">
                <div className="flex-1 flex-grow-[4]">
                    {
                        fetchData ?
                        <Image
                        className="w-full h-full object-cover "
                        src={selectImg ? selectImg : fetchData!.images[1].url}
                        width={500}
                        height={500}
                        alt="Imagem Selecionada"
                        />
                        :
                        "loading"
                    }
                </div>
                <div className="flex flex-1 flex-col flex-grow-[1] gap-3 *:w-full">
                    {
                        fetchData?.images.map(item =>(
                            <Image
                            src={item.url}
                            width={1000}
                            height={1000}
                            alt="Imagem do produto"
                            onClick={()=>setSelectedImg(item.url)}
                            className={`${item.url == selectImg ? "opacity-100" : "opacity-35"} transition-opacity hover:opacity-100 cursor-pointer`}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col justify-between gap-12">
              <div className="flex flex-col gap-12">
             <div>
             {
                fetchData &&
              <>
                <p className="text-slate-500 text-md mb-4">{fetchData.brand}</p>
                <h1 className="font-light text-3xl text-slate-600 ">{fetchData.name}</h1>
                <h3 className="font-semibold text-xl text-slate-600">{FormatCurrency(fetchData.price)}</h3>
                <p className="font-normal text-slate-500 text-xs mt-4">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
              </>
                
               }
             </div>
             <div>
                <p className="text-xl font-semibold text-slate-500">Descrição</p>
                <p className="text-sm text-slate-500">{fetchData?.description}</p>
                <div className="flex gap-4 mt-4 *:text-sky-800">
                    <Facebook size={20}/>
                    <Pinterest size={20}/>
                    <Twitter size={20}/>
                    <Instagram size={20}/>

                    </div>
              </div>
            </div>  
            <Button title="Adicionar ao Carrinho"/>
        </div>
            </div>
        </>
    )
}