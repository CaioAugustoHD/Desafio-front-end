import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

interface CounterProps {
  newProduct?: {
    id: number;
    name: string;
    price: number;
  };
  isCart: boolean;
  cartProduct?: {
    id: number;
    name: string;
    price: number;
    orderId: number;
    details: string;
    quantity: number;
  };
}

export function Counter(props: CounterProps) {
  const { addItemsToCart, removeItemsToCart, increaseQuantity } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(props.isCart ? 1 : 0);

  function productDetails(e) {
    const details: string =
      e.target.parentElement.parentElement.parentElement.children[0].lastChild
        .textContent;
    const orderId = Number(
      e.target.parentElement.parentElement.parentElement.children[0].id
    );
    const quantity = 0;
    return { details, orderId, quantity };
  }

  useEffect(() => {
    setQuantity(props.cartProduct ? props.cartProduct?.quantity : quantity);
  }, [props]);

  return (
    <div>
      <button
        onClick={(e) => {
          if (props.cartProduct) {
            const newQuantity = removeItemsToCart(props.cartProduct);
            setQuantity(newQuantity);
          } else {
            const data = productDetails(e);
            const newQuantity = removeItemsToCart(
              Object.assign(props.newProduct, data)
            );
            setQuantity(newQuantity);
          }
        }}
        className="btn btn-sm p-0 rounded-circle border-0"
        style={{
          backgroundColor: "#D9D9D9",
          color: "#696969",
          alignItems: "center",
          height: "22px",
          width: "22px"
        }}
      >
        -
      </button>

      <span className="mx-2">{quantity}</span>

      <button
        onClick={(e) => {
          if (props.cartProduct) {
            const q = increaseQuantity(props.cartProduct);
            props.cartProduct.quantity = q;
            setQuantity(q);
          } else {
            const data = productDetails(e);
            const q = addItemsToCart(Object.assign(props.newProduct, data));
            setQuantity(q);
          }
        }}
        className="btn btn-sm btn-primary p-0 rounded-circle border-0"
        style={{
          color: "#FFF",
          height: "22px",
          width: "22px"
        }}
      >
        +
      </button>
    </div>
  );
}
