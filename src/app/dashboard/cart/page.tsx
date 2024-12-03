import { WidgetItem } from "@/components";
import { products, type Product } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";


export const metadata = {
    title: 'Productos en el carrito',
    description: 'SEo Title',
}

interface ProductInCart {
    product: Product;
    quantity: number;
}

const getProductInCart = ( cart: { [id: string]: number } ): ProductInCart[] => {

    const productsInCart: ProductInCart[] = [];

    for (const id of Object.keys(cart)) {
        const product = products.find(product => product.id === id);
        if (product) {
            productsInCart.push({
                product,
                quantity: cart[id]
            });
        }
    }

    return productsInCart

}


export default function CartPage() {

    const cookiesStore = cookies();
    const cart =  JSON.parse( cookiesStore.get('cart')?.value ?? '{}' ) as { [id: string]: number };
    const productsInCart = getProductInCart(cart);

    const totalToPay = productsInCart.reduce(
        ( prev, current ) =>( current.product.price * current.quantity ) + prev, 0);

    return (
        <div>
            <h1 className="text-4xl">Productos en el carrito</h1>
            <hr className="my-4" />
            <div className="flex flex-col gap-4 sm:flex-row w-full" >

                <div className="flex flex-col gap-4 w-full ">
                    {
                        productsInCart.map( item => (
                            <ItemCard key={item.product.id} product={item.product} quantity={item.quantity} />
                        ))
                    }
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-4/12 ">
                    <WidgetItem title="Resumen de compra">
                        <div className="mt-2 flex justify-center gap-4">
                            <h3 className="text-2xl text-gray-600 font-bold dark:text-white ">Total a pagar: ${(totalToPay *1.15).toFixed(2)}</h3>
                        </div>

                        <span className="text-center bg-gray-200 rounded-full dark:bg-gray-800">
                            Impuesto 15% : ${(totalToPay * 0.15).toFixed(2)}
                        </span>
                    </WidgetItem>
                </div>

            </div>
        </div>
    );
}
