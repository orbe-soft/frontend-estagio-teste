"use client"

import { FilterProducts } from "./components/FilterProducts";
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import { Pagination } from './components/pagination';
import { API } from './utils/api';
import { useQuery } from '@tanstack/react-query';
import { DataPropsSchema } from './utils/Schemas/Schemas';


export default function Home() {
  const axios = require('axios').default
  const[page,setPage]=useState<number>(1)

  const {data:ProductsResponse} = useQuery({
    queryKey:['get-Products',page],
    queryFn:()=>fetchUser() 
  })

  const fetchUser = async () => {
    const response = await axios.get(`${API}/products?page=${page}`)
    console.error(response.data);
    return DataPropsSchema.parse(response.data)

  }
  

  function handlePagination({type,value}:{type?:"prev"|"next" | "index",value:number}){

    if (type=="prev" && value >1){
      setPage(value)
    }
    else if(type == "next" && value <= ProductsResponse!.pagination.lastPage){
      setPage(value)
    }
    else if (type=="index"){
      setPage(value)
      console.log(value)
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
              <Pagination.Button key={value} value={value} type='pagination' onClick={()=>handlePagination({type:"index",value:value})} selected={value === page ? true:false} />
              ))
          }
        </>
    ) 

  }
  
  return (
    
    <main className="w-full flex-1 flex flex-col  pb-12">

    <FilterProducts>
      <div className='gap-5 flex'>
      <FilterProducts.BrandFilterTag name="TODAS AS MARCAS" FilterAll Selected/>
      <FilterProducts.BrandFilterTag name="Caloi"/>
      <FilterProducts.BrandFilterTag name="Krw"/>
      </div>

      <FilterProducts.PriceFilter/>
    </FilterProducts>
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
        <Pagination.Button type='prev' onClick={()=>handlePagination({type:"prev",value:page - 1})}/>
          <div className='flex gap-2'>
            {
             ProductsResponse ?  
             
             paginationIndex() 
             
             : "loading"
            }
          </div>
        <Pagination.Button type='next' onClick={()=>handlePagination({type:"next",value:page+1})}/>
      </Pagination>
    </main>
  );
}
