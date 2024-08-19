import { ArrowLeft, ArrowRight } from "lucide-react"
import { ReactNode } from "react"

type PaginationProps={
    children:ReactNode
}
type buttonProps= {
    children?:ReactNode 
    onClick:()=>void
    type: "next"| "prev"| "pagination"
}

function Button({onClick,type, children}:buttonProps){
    const size = 20
    
    function buttonContent(){
        if (type=="prev"){
            return <><ArrowLeft size={size}/> Anterior</>
        }
        else if(type=="next"){
            return <>Próximo <ArrowRight size={size}/>  </>
        }
        else if(type=="pagination"){
            return children
        }
    }
    return(
            <button className={` text-slate-500 hover:text-slate-800 flex gap-2 ${type=="pagination" ? "p-4":"p-0"}`} onClick={onClick}>
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