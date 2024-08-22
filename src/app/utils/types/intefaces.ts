export interface QueryParams {
    id?:string
    page?: number
    order?: "ASC" | "DESC"
    limit?: number
    name?: string
    brand?: string
  }
 
export interface queryIdParams {
    id?: string
}