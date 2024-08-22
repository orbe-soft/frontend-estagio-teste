import BackNavigation from "@/app/components/backNavigation";
import Container from "@/app/components/container";
import { childrenProps } from "@/app/utils/types/Props";

export default function Layout({children}:childrenProps){
    return(
        <> 
            <div className="grid lg:grid-cols-3 grid-rows-auto1fr gap-x-14 h-full overflow-hidden ">
            <BackNavigation />
           
            {children}
            </div>
        </>
    )
}