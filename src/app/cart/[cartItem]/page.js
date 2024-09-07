"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const CartItem = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const price = searchParams.get("price");
  const quantity = searchParams.get("quantity");
  const thumbnail = searchParams.get("thumbnail");
  const title = searchParams.get("title");
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const saveCartToLocalStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };

  useEffect(() => {
    const existingCart = loadCartFromLocalStorage();

    if (id && price && quantity && thumbnail && title) {
      const productExists = existingCart.some((item) => item.id === id);

      if (!productExists) {
        const newItem = { id, price, quantity, thumbnail, title };
        const updatedCart = [...existingCart, newItem];
        setCartItems(updatedCart);
        saveCartToLocalStorage(updatedCart);
      } else {
        setCartItems(existingCart);
      }
    } else {
      setCartItems(existingCart);
    }
  }, [id, price, quantity, thumbnail, title]);

  useEffect(() => {
    const calculatedTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,0
    );
    setTotal(calculatedTotal);
  }, [cartItems]);

  const handleDelete = (id) => {
    const deletedItems = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(deletedItems);
    saveCartToLocalStorage(deletedItems);
  };

  return (
    <div className="m-24 flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="font-bold">Product</p>
        <p className="font-bold">Price</p>
        <p className="font-bold">Quantity</p>
        <p className="font-bold">Total</p>
        <p className="font-bold">Remove</p>
      </div>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="border-b border-black w-full flex justify-between">
                <div className="flex flex-col w-fit">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-[75px] h-[75px]"
                  />
                  <p className="mt-5">{item.title}</p>
                </div>

                <p className="mt-5">{item.price}$</p>
                <p className="mt-5">{item.quantity}</p>
                <p className="mt-5">{item.price * item.quantity}$</p>
                <button onClick={() => handleDelete(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <p className="font-bold">SUBTOTAL:</p>
            <p>{total}$</p>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartItem;
