"use client"
import Image from "next/image"
import logo from "../assets/logo.webp"
import InputSearch from "./InputSearch"
import CartIcon from "./CartIcon"
import Link from "next/link"
import { useCartStore } from "../utils/hooks/useQueryParamsStore"

export default function Header(){

    const{cartData}=useCartStore()
    return(
        <header className="bg-white px-4">
            <div className=" max-w-6xl mx-auto h-20 flex items-center justify-between">
                <Image src={logo} className="w-[120px]" alt="Bike Store Logo"/>
                <InputSearch/>
                <Link href={"/cart"}><CartIcon quantity={cartData.length}/></Link>
            </div>
        </header>
    )
}