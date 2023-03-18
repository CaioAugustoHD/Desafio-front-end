import { createContext, ReactNode, useState } from "react";


interface ProductType {
        id: number,
        name: string,
        price: number,
        details: string,
        orderId: number,
        quantity: number
    }


interface defaultType {
    addItemsToCart(): any
    removeItemsToCart(): any
    cartProducts: []
}

const defaultValue = {
    addItemsToCart: () => {},
    removeItemsToCart: () => {},
    cartProducts: []
}

export const CartContext = createContext<defaultType>({defaultValue})

export function CartProvider({ children }: {children: ReactNode}) {
    const [cartProducts, setCartProducts] = useState<ProductType[]>([])

    function addItemsToCart(selectedProduct: ProductType) {
        const copyCartProducts = [...cartProducts]
        const item = copyCartProducts.find(product => product.orderId == selectedProduct.orderId)

        item ? item.quantity = item.quantity + 1
        : copyCartProducts.push({ id: selectedProduct.id, name: selectedProduct.name, price: selectedProduct.price, details: selectedProduct.details, orderId: selectedProduct.orderId, quantity: 1})
    
        setCartProducts(copyCartProducts)
    }

    function removeItemsToCart(selectedProduct: ProductType) {
        const copyCartProducts = [...cartProducts]
        const item = copyCartProducts.find(product => product.orderId == selectedProduct.orderId)

        if(item && item.quantity > 1) {
            item.quantity = item.quantity - 1
            setCartProducts(copyCartProducts)
        } else {
            const newCopyCartProducts = copyCartProducts.filter(product => product.orderId !== selectedProduct.orderId)
            setCartProducts(newCopyCartProducts)
        }
    }

    console.log("carrinho ->", cartProducts)
    return (
        <CartContext.Provider value={{addItemsToCart, removeItemsToCart, cartProducts}}>
            {children}
        </CartContext.Provider>
    )
}