import { create } from "zustand";
import { QueryParams } from "../types/intefaces";

type StateProps ={
    queryParams:QueryParams
    setQueryParams:(newParams:QueryParams) => void
}

type brandDataProps ={
    brand:string
}
type brandStoreProps={
    brandData:brandDataProps[],
    setBrandData:(data:brandDataProps[]) => void
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
        setBrandData:(brandData) => set ({brandData:brandData})
    }
))
export {useQueryParamsStore,useBrandStore}