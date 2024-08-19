import { ChevronDown } from "lucide-react"
import { HTMLProps, ReactNode } from "react"

type FilterProductsProps = {
    children:ReactNode
}
type BrandFilterTagProps = {
    name:string
    Selected?:boolean
    FilterAll?:boolean
    onCLick?:()=>void
}
function BrandFilterTag({name,FilterAll,Selected, onCLick}:BrandFilterTagProps){
    return(
        <span className={` pb-1 border-b-4 transition-colors hover:text-gray-700 ${Selected ?"text-gray-700 border-brandPrimary":"border-transparent text-gray-500"} ${FilterAll&& "font-semibold"}`} onClick={onCLick}>
            {name}
            
        </span>
    )

}

function PriceFilter(){
    
    return(
        <div>
          <details className="*:text-gray-500 group *:transition-transform">
            <summary className="flex gap-2 items-center cursor-pointer">
                <p>Organizar por </p> <ChevronDown size={16} className=" transition-transform group-open:rotate-180"/>
            </summary>
                <div className="p-4 transition-all border mt-2 border-gray-100 bg-white shadow-lg rounded-md absolute z-20 *:my-2 *:cursor-pointer :hover:text-gray-800">
                    <p>Preço: Maior - Menor</p> 
                    <p>Preço: Menor - Maior</p> 
                </div>   
          </details>
        </div>
    )
}
function FilterProducts({children}:FilterProductsProps){
    return(
        <div className="flex justify-between w-auto" >
             {children}
        </div>        
    )
}

FilterProducts.BrandFilterTag = BrandFilterTag
FilterProducts.PriceFilter = PriceFilter

export {FilterProducts}

