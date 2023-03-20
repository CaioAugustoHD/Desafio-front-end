import { createContext, ReactNode, useState } from "react";

interface ProductType {
  id: number;
  name: string;
  price: number;
  details: string;
  orderId: number;
  quantity: number;
}

interface defaultType {
  addItemsToCart(selectedProduct: ProductType): number;
  removeItemsToCart(selectedProduct: ProductType): number;
  cartProducts: ProductType[];
  format(price: number): string;
  increaseQuantity(selectedProduct: ProductType): number;
  sumCart(): number;
}

const DEFAULT_VALUE = {
  addItemsToCart: () => 0,
  removeItemsToCart: () => 0,
  cartProducts: [],
  format: () => "",
  increaseQuantity: () => 0,
  sumCart: () => 0
};

export const CartContext = createContext<defaultType>(DEFAULT_VALUE);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartProducts, setCartProducts] = useState<ProductType[]>(
    DEFAULT_VALUE.cartProducts
  );

  function addItemsToCart(selectedProduct: ProductType) {
    const copyCartProducts = [...cartProducts];
    const item = copyCartProducts.find(
      (product) =>
        product.orderId == selectedProduct.orderId &&
        product.id === selectedProduct.id
    );

    if (item) {
      item.quantity = item.quantity + 1;
      setCartProducts(copyCartProducts);
      return item.quantity;
    } else {
      copyCartProducts.push({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        details: selectedProduct.details,
        orderId: selectedProduct.orderId,
        quantity: 1
      });
      setCartProducts(copyCartProducts);
      return 1;
    }
  }

  function removeItemsToCart(selectedProduct: ProductType) {
    const copyCartProducts = [...cartProducts];
    const item = copyCartProducts.find(
      (product) =>
        product.orderId == selectedProduct.orderId &&
        product.id === selectedProduct.id
    );

    if (item && item.quantity > 1) {
      item.quantity = item.quantity - 1;
      setCartProducts(copyCartProducts);
      return item.quantity;
    } else {
      const newCopyCartProducts = copyCartProducts.filter(
        (product) =>
          product.orderId !== selectedProduct.orderId ||
          product.id !== selectedProduct.id
      );
      setCartProducts(newCopyCartProducts);
      return 0;
    }
  }

  function increaseQuantity(selectedProduct: ProductType) {
    const copyCartProducts = [...cartProducts];
    const item = copyCartProducts.find(
      (product) =>
        product.orderId == selectedProduct.orderId &&
        product.id === selectedProduct.id
    );

    item && item.quantity + 1;
    setCartProducts(copyCartProducts);
    return item?.quantity + 1;
  }

  function format(price: number) {
    return price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
  }

  function sumCart() {
    const copyCartProducts = [...cartProducts];
    const multiply = copyCartProducts.map(
      (product) => product.price * product.quantity
    );
    const sum = multiply.reduce((acc, num) => acc + num, 0);
    return sum;
  }

  return (
    <CartContext.Provider
      value={{
        addItemsToCart,
        removeItemsToCart,
        cartProducts,
        format,
        increaseQuantity,
        sumCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
