import BackNavigation from "@/app/components/backNavigation";
import Container from "@/app/components/container";
import { childrenProps } from "@/app/utils/types/Props";

export default function Layout({children}:childrenProps){
    return(
         <>
            <BackNavigation/>
            {children}
         </>
    )
}