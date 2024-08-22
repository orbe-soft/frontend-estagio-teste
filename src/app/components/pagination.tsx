import { ArrowLeft, ArrowRight } from "lucide-react"
import { ReactNode } from "react"

type PaginationProps={
    children:ReactNode
}
type buttonProps= {
    children?:ReactNode 
    onClick:()=>void
    type: "next"| "prev"| "pagination"
    selected?:boolean
    value?:number
}

function Button({onClick,type, selected,value}:buttonProps){
    const size = 20
    
    function buttonContent(){
        if (type=="prev"){
            return <><ArrowLeft size={size}/> Anterior</>
        }
        else if(type=="next"){
            return <>Próximo <ArrowRight size={size}/>  </>
        }
        else if(type=="pagination"){
            return value
        }
    }
    

  
  
    return(
            <button className={` text-slate-500 hover:text-slate-800 flex gap-2 rounded-md ${type=="pagination" ? "p-4":"p-0"} ${selected ? "bg-brandPrimary text-white": ""}`} onClick={onClick} >
              {buttonContent()}
            </button>
    )
}


function Pagination({children}:PaginationProps){
    return(
        <div className=" group gap-8 flex justify-end items-center *:text-sm *:font-semibold">
            {children}
        </div>
    )
}

Pagination.Button = Button

export {Pagination}