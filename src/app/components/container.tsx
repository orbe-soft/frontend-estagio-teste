import { ReactNode } from "react"
import { childrenProps } from "../utils/types/Props"



export default function Container({children}:childrenProps){
    return(
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 w-full">
            {children}
        </div>
    )
}