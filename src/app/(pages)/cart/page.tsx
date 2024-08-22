"use client"
import Button from "@/app/components/button";
import CartItem from "@/app/components/cartItem";
import { FormatCurrency } from "@/app/utils/functions/format-currency";
import { useCartStore } from "@/app/utils/hooks/useQueryParamsStore";


export default function Cart(){

   const{cartData,cartPriceTotal}=useCartStore()

   const Ship = cartPriceTotal <= 900 ? 40 : null

    return(
        
           <>
            <div className="flex-1 col-start-1  lg:col-end-3 overflow-hidden flex flex-col gap-4">
                <div>
                    <h1 className="font-semibold uppercase text-slate-800 text-2xl">Seu Carrinho</h1>
                    <p className="font-light text-sm text-slate-500 mt-2">Total({cartData.length > 1 ? cartData.length + " Produtos" : cartData.length + " Produto"}) <span className="font-semibold">{FormatCurrency(cartPriceTotal)}</span></p>
                </div>
                
                <div className="relative overflow-hidden">
                      
                        <div className="overflow-y-auto flex flex-col h-full pr-2 ">
                            
                            {
                                cartData.map((item)=>(
                                    <CartItem
                                    key={item.id}
                                    data={item}
                                    />
                                ))
                            }
                            
                        </div>
                </div>
                
            </div>
            <div className="bg-white p-5 ">
                <div className="flex flex-col gap-16">
                    <h3 className="font-semibold text-gray-600">Resumo do Pedido</h3>
                    <div className="[&>p]:flex [&>p]:justify-between  ">
                        <p className="text-gray-500">Subtotal de produtos <span> {FormatCurrency(cartPriceTotal)}</span></p>
                        <p className="mb-4 text-gray-500">Entrega <span>{Ship ? FormatCurrency(Ship) : "Grátis"}</span></p>
                        <p className="border-t font-semibold border-gray-400 text-gray-800">Total <span> {FormatCurrency(cartPriceTotal + Ship)}</span></p>

                    </div>
                    <Button title="Finalizar Compra" type="success"/>
                </div>
                
            </div>

           </>
    )
}