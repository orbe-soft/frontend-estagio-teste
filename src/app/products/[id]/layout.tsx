import Container from "@/app/components/container";
import { childrenProps } from "@/app/utils/types/Props";

export default function Layout({children}:childrenProps){
    return(
        <Container>
            {children}
        </Container>
    )
}