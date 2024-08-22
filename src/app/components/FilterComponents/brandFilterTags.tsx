type BrandFilterTagProps = {
    name:string
    Selected?:boolean
    FilterAll?:boolean
    onCLick:()=>void
}

export default function BrandFilterTag({name,FilterAll,Selected, onCLick}:BrandFilterTagProps){

    return(
        <button className={` pb-1 border-b-4 transition-colors hover:text-gray-700 text-nowrap  ${Selected ?"text-gray-700 border-brandPrimary":"border-transparent text-gray-500"} ${FilterAll&& "font-semibold uppercase"}`} onClick={onCLick}>
            {name}
            
        </button>
    )

}