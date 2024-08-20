import Button from "@/app/components/button";
import CartItem from "@/app/components/cartItem";
import { FormatCurrency } from "@/app/utils/functions/format-currency";

export default function Cart(){
    return(
        
           <>
            <div className="flex-1 col-start-1 col-end-3 overflow-hidden flex flex-col gap-4">
                <div>
                    <h1 className="font-semibold uppercase text-slate-800 text-2xl">Seu Carrinho</h1>
                    <p className="font-light text-sm text-slate-500 mt-2">Total(3 produtos) <span className="font-semibold">{FormatCurrency(400)}</span></p>
                </div>
                
                <div className="relative overflow-hidden">
                      
                        <div className="overflow-y-auto flex flex-col h-full pr-2 ">
                            <CartItem
                            data={{
                                name:"Bicicleta",
                                brand:"bic",
                                price:3000,
                                image:"https://loremflickr.com/640/480/mountain_bike?lock=1607992680120320"
                            }}
                            />
                            <CartItem
                            data={{
                                name:"Bicicleta",
                                brand:"bic",
                                price:3000,
                                image:"https://loremflickr.com/640/480/mountain_bike?lock=1607992680120320"
                            }}
                            />
                            <CartItem
                            data={{
                                name:"Bicicleta",
                                brand:"bic",
                                price:3000,
                                image:"https://loremflickr.com/640/480/mountain_bike?lock=1607992680120320"
                            }}
                            />
                            <CartItem
                            data={{
                                name:"Bicicleta",
                                brand:"bic",
                                price:3000,
                                image:"https://loremflickr.com/640/480/mountain_bike?lock=1607992680120320"
                            }}
                            />
                        </div>
                </div>
                
            </div>
            <div className="bg-white p-5 ">
                <div className="flex flex-col gap-16">
                    <h3 className="font-semibold text-gray-600">Resumo do Pedido</h3>
                    <div className="[&>p]:flex [&>p]:justify-between  ">
                        <p className="text-gray-500">Subtotal de produtos <span> {FormatCurrency(400)}</span></p>
                        <p className="mb-4 text-gray-500">Entrega <span>{FormatCurrency(400)}</span></p>
                        <p className="border-t font-semibold border-gray-400 text-gray-800">Total <span> {FormatCurrency(400)}</span></p>

                    </div>
                    <Button title="Finalizar Compra" type="success"/>
                </div>
                
            </div>

           </>
    )
}