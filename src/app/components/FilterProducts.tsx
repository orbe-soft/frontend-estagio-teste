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

function FilterProducts({children}:FilterProductsProps){
    return(
        <div className="flex justify-between" >
            <div className="flex gap-10">
             {children}
            </div>

        </div>        
    )
}

FilterProducts.BrandFilterTag = BrandFilterTag

export {FilterProducts}

