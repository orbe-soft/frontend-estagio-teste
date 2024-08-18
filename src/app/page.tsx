"use client"

import {z} from 'zod'
import { FilterProducts } from "./components/FilterProducts";
import { useEffect, useState } from 'react';
import ProductCard, { ProductInfoProps } from './components/ProductCard';

type dataProps = {
  content:ProductInfoProps[],
  pagination:object[],
}
export default function Home() {
  const axios = require('axios').default;
  const [fetchData, setFechData] = useState<dataProps>();

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
      setFechData(data)

     
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <main className="max-w-6xl mx-auto mt-24 px-4">

    <FilterProducts>
      <FilterProducts.BrandFilterTag name="TODAS AS MARCAS" FilterAll Selected/>
      <FilterProducts.BrandFilterTag name="Caloi"/>
      <FilterProducts.BrandFilterTag name="Krw"/>
    </FilterProducts>

    <div className='flex flex-wrap gap-4 pt-6 '>

       {fetchData ? fetchData.content.map((item) =>{
        
        
        return(<ProductCard
        
        data={item}
        />)
      }): "loading"}

    </div>
    </main>
  );
}
