//'use client'


import Cookies from 'js-cookie';



export const getCookieCart =():{ [id: string]: number } => {

    if ( Cookies.get('cart') ){

        const cookieCart = JSON.parse(Cookies.get('cart') as string??'{}');
        return cookieCart

    }
    return {}
}

export const addProductToCart = (id: string ) => {

    const cookieCart = getCookieCart();

    if ( cookieCart[id])  {
        cookieCart[id] = cookieCart[id] + 1
    }else{
        cookieCart[id] = 1
    }

    Cookies.set('cart', JSON.stringify(cookieCart));

}

export const removeProductFromCart = (id: string ) => {

    const cookieCart = getCookieCart();

    if ( cookieCart[id])  {
        delete cookieCart[id]
    }

    Cookies.set('cart', JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = (id: string ) => {

    const cookieCart = getCookieCart();

    if ( !cookieCart[id]) return;

    const itemsInCart = cookieCart[id] -1;

    if ( itemsInCart <= 0 ) {
        delete cookieCart[id]
    }else{
        cookieCart[id] = itemsInCart
    }

    Cookies.set('cart', JSON.stringify(cookieCart));
}
