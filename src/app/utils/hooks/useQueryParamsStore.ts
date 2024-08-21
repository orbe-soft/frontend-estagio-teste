import { create } from "zustand";
import { QueryParams } from "../types/intefaces"
import { ProductInfoProps } from "../types/Props";


type StateProps ={
    queryParams:QueryParams
    setQueryParams:(newParams:QueryParams) => void
}

type brandDataProps ={
    brand:string
}

type brandStoreProps={
    brandData:brandDataProps[],
    setBrandData:(data:brandDataProps) => void
}


type cartStoreProps ={
    cartData:ProductInfoProps[],
    cartPriceTotal:number,
    setTotalPrice:(value:number) => void
    insertItemToCart:(cartData:ProductInfoProps) => void
}


const useQueryParamsStore = create<StateProps>((set)=>(
    {
      queryParams:{},
        setQueryParams:(queryParams) => set ({queryParams:queryParams})
    }
   
))


const useBrandStore = create<brandStoreProps>((set)=>(
    {
        brandData:[],
        setBrandData:(brandData) => set((state)=>({brandData:[...state.brandData,brandData]}))
    }
))

const useCartStore = create<cartStoreProps>((set)=>(
    {
        cartData:[],
        cartPriceTotal:0,
        setTotalPrice:(value) => set((state) =>({cartPriceTotal:state.cartPriceTotal + value})),
        insertItemToCart:(item) => set((state)=>({cartData:[...state.cartData,item]}))
    }
))

export {useQueryParamsStore,useBrandStore,useCartStore}