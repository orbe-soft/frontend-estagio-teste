import { ProductInfoProps } from "@/app/utils/types/Props"
import BrandFilterTag from "./brandFilterTags"
import { Swiper,SwiperSlide } from "swiper/react"
import 'swiper/css';
import { useQueryParamsStore } from "@/app/utils/hooks/useQueryParamsStore";
import PriceFilter from "./priceFilter";

type FilterProductsProps = {
    brandData:ProductInfoProps[],
}

function FilterProducts({brandData}:FilterProductsProps){
    const{queryParams, setQueryParams}=useQueryParamsStore()

    return(
        <div className="flex justify-between w-auto" >
             <div className="flex gap-5">
                <BrandFilterTag name="Todas as " onCLick={()=>(setQueryParams({...queryParams,brand:""}))} FilterAll Selected/>
                <span className="text-slate-500">|</span>
                <div className="max-w-[300px]">
                    <Swiper
                    spaceBetween={5}
                    slidesPerView={'auto'}
                    >
                        {brandData.map(item =>(
                            <SwiperSlide
                            key={item.id}
                            className="px-4"
                            >
                            <BrandFilterTag name={item.brand} onCLick={()=>(setQueryParams({...queryParams,brand:item.brand}))}  />  
                            </SwiperSlide>
                        ))}
                    
                    </Swiper>
             </div>
             </div>
             

             <PriceFilter/>
        </div>        
    )
}


export {FilterProducts}

