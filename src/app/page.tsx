"use client"

import { FilterProducts } from "./components/FilterComponents/FilterProducts";
import { useEffect } from 'react';
import ProductCard from './components/ProductCard';
import { Pagination } from './components/pagination';
import { useQuery } from '@tanstack/react-query';
import 'swiper/css';
import { fetchProductData } from "./utils/hooks/hooks";
import { useBrandStore, useQueryParamsStore } from "./utils/hooks/useQueryParamsStore";



export default function Home() {

  const{queryParams, setQueryParams}=useQueryParamsStore()

  const{brandData, setBrandData}=useBrandStore()

  const {data:ProductsResponse} = useQuery({
    queryKey:['get-Products',queryParams],
    queryFn:()=>(fetchProductData(queryParams))
  })
  
  useEffect(()=>{
     if(brandData){
        ProductsResponse?.content.forEach((item)=>{
          setBrandData(item.brand)

        })
      }
  },[ProductsResponse])

  function handlePagination({type,value}:{type?:"prev"|"next" | "index",value:number}){

    const newPage = value 

    if (type=="prev" && value > 0){
      setQueryParams({...queryParams,page:newPage})
    }
    else if(type == "next" && value <= ProductsResponse!.pagination.lastPage){
      setQueryParams({...queryParams,page:newPage})
    }
    else if (type=="index"){
      setQueryParams({...queryParams,page:newPage})

    }
  }
 
  function paginationIndex(){
    const buttons =[]
    const pageQuantity = ProductsResponse!.pagination.lastPage
    
    for (let index = 1; index <= pageQuantity; index++) {
      buttons.push(index)
      }
      
      return( 
        <>
          { 
            buttons.map(value =>(
              <Pagination.Button key={value} value={value} type='pagination' onClick={()=>handlePagination({type:"index",value:value})} selected={value === queryParams.page ? true:false} />
              ))
          }
        </>
    ) 

  }
  
  return (
    
    <main className="w-full flex-1 flex flex-col  pb-12">

    {ProductsResponse ? <FilterProducts brandData={ProductsResponse.content}/>:"Loading"}

      <div className='flex flex-wrap gap-4 pt-6 w-full flex-1'>

        {
          ProductsResponse ? ProductsResponse.content.map((item) =>{

          return(
          
          <ProductCard
          
          data={item}

          />)
        }): "loading"
        }

      </div>
      <Pagination>
        <Pagination.Button type='prev' onClick={()=>handlePagination({type:"prev",value:queryParams.page! - 1})}/>
          <div className='flex gap-2'>
            {
             ProductsResponse ?  
             
             paginationIndex() 
             
             : "loading"
            }
          </div>
        <Pagination.Button type='next' onClick={()=>handlePagination({type:"next",value:queryParams.page! + 1})}/>
      </Pagination>
    </main>
  );
}
