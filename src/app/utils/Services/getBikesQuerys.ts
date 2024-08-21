import { QueryParams } from "../types/intefaces";



export const buildQueryString = (params: QueryParams) => {
    const query = new URLSearchParams(params as string).toString();
    return query ? `?${query}` : "";
  };
  