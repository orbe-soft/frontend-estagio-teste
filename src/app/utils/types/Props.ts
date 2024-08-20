import { ReactNode } from "react"

export type childrenProps = {
    children:ReactNode
}
// Propriedades da dados recebida da API
export type dataProps = {
    content:ProductInfoProps[],
    pagination:{
    currentPage:number,
    lastPage:number,
    total:number,
    limit:number,
    }
  }

//Propriedades do produto
export type ProductInfoProps ={
   
    id:string,
    name:string,
    brand:string,
    images:ImageProps[],
    description:string,
    price:number,
   
}

type ImageProps = {
    id:string,
    url:string,
    order_id:string,
}
