"use client"

import {z} from 'zod'
import { FilterProducts } from "./components/FilterProducts";
import { useEffect, useState } from 'react';
import ProductCard, { ProductInfoProps } from './components/ProductCard';
import { Pagination } from './components/pagination';

type dataProps = {
  content:ProductInfoProps[],
  pagination:{
  currentPage:number,
  lastPage:number,
  total:number,
  limit:number,
  }
}
export default function Home() {
  const axios = require('axios').default;
  const [fetchData, setFetchData] = useState<dataProps>();

  const ProductsSchema = z.object({
    order:z.enum(['ASC','DESC']),
    name:z.string(),
    brand:z.string(),
  })

  const Schemar ={
    order:'ASC',
    name:'Caloi City Tour',
    brand:'Caloi'
  }
  
  useEffect(()=>{
    fetchProductData()

  },[])

  async function fetchProductData() {
    try {

      const {data} = await axios.get('https://api-frontend-test.orbesoft.com.br/api/products')
      setFetchData(data)

     
    } 
    catch (error) {
      console.error(error);
    }
  }
  console.log(fetchData?.pagination)

  function handlePagination(value){

  }
 

  function paginationIndex(){
    const buttons =[]
    const pageQuantity = fetchData?.pagination.lastPage
    
    for (let index = 1; index <= pageQuantity; index++) {
      buttons.push(index)
      }
      console.log(buttons)
      return( 
        <>
          { 
            buttons.map(value =>(
              <Pagination.Button key={value} type='pagination' onClick={()=>handlePagination("next")}>
                {value}
              </Pagination.Button>))
          }
        </>
    ) 

  }
  return (
    <main className="max-w-6xl mx-auto mt-24 px-4">

    <FilterProducts>
      <div className='gap-5 flex'>
      <FilterProducts.BrandFilterTag name="TODAS AS MARCAS" FilterAll Selected/>
      <FilterProducts.BrandFilterTag name="Caloi"/>
      <FilterProducts.BrandFilterTag name="Krw"/>
      </div>

      <FilterProducts.PriceFilter/>
    </FilterProducts>
      <div className='flex flex-wrap gap-4 pt-6 '>

        {fetchData ? fetchData.content.map((item) =>{
          
          
          return(<ProductCard
          
          data={item}
          />)
        }): "loading"
        }

      </div>
      <Pagination>
        <Pagination.Button type='prev' onClick={()=>handlePagination("next")}/>
          <div className='flex gap-2'>
            {
             fetchData ?  
             
             paginationIndex() 
             
             : "loading"
            }
          </div>
        <Pagination.Button type='next' onClick={()=>handlePagination("prev")}/>
      </Pagination>
    </main>
  );
}
