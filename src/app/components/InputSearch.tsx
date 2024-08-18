import {Search} from "lucide-react"


export default function InputSearch(){
    return(
        <div className="py-3 px-4 bg-gray-100 rounded-lg flex items-center min-w-72">
            
            <input className="w-full bg-transparent text-sm placeholder:text-gray-500 focus-visible:outline-none" placeholder="Pesquise aqui"/>
            <Search color="gray" size={20}/>  
        </div>
    )
}