import axios from "axios";
import { API } from "../api";
import { DataPropsSchema } from "../Schemas/Schemas";
import { buildQueryString } from "../Services/getBikesQuerys";
import { QueryParams } from "../types/intefaces";
import { useBrandStore } from "./useQueryParamsStore";



const fetchProductData = async (params:QueryParams) => {    
    const url = buildQueryString(params)
    const response = await axios.get(`${API}/products${url}`)

    console.error(response.data);
    return DataPropsSchema.parse(response.data)
}


export {fetchProductData}