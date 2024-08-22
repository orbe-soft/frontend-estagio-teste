import { Undo2 } from "lucide-react";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default function BackNavigation(){
    return(
        <div className="flex-1 mb-3 col-start-1 lg:col-end-3" >
            <Link href={"/"} className="flex gap-2 items-center text-sm font-semibold text-slate-600">
                    <Undo2 size={14}/>
                    Voltar
            </Link>
        </div>
    )
}