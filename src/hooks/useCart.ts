// import { useEffect, /*useMemo,*/ useState } from "react";
// import type { CartItem, /*Guitar*/ } from "../types";

// export const useCart = () => {
//   const initialCart = (): CartItem[] => {
//     const localStorageCart = localStorage.getItem("cart");
//     return localStorageCart ? JSON.parse(localStorageCart) : [];
//   };

//   const [cart, setCart] = useState(initialCart);

  // const MAX_ITEMS = 5;
  // const MIN_ITEMS = 1;

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  // function addToCart(item: Guitar) {
  //   const itemExist = cart.findIndex((guitar) => guitar.id === item.id);

  //   if (itemExist >= 0) {
  //     if (cart[itemExist].quantity >= MAX_ITEMS) return;
  //     const updateCart = [...cart];
  //     updateCart[itemExist].quantity++;
  //     setCart(updateCart);
  //   } else {
  //     const newCart: CartItem = { ...item, quantity: 1 };
  //     setCart([...cart, newCart]);
  //   }
  // }

  // function removeFromCart(id: Guitar['id']) {
  //   setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  // }

  // function increaseQuantity(id: Guitar['id']) {
  //   const updateCart = cart.map((item) => {
  //     if (item.id === id && item.quantity < MAX_ITEMS) {
  //       return {
  //         ...item,
  //         quantity: item.quantity + 1,
  //       };
  //     }
  //     return item;
  //   });
  //   setCart(updateCart);
  // }

  // function decreaseQuantity(id: Guitar['id']) {
  //   const updateCart = cart.map((item) => {
  //     if (item.id === id && item.quantity > MIN_ITEMS) {
  //       return {
  //         ...item,
  //         quantity: item.quantity - 1,
  //       };
  //     }
  //     return item;
  //   });
  //   setCart(updateCart);
  // }

  // function clearCart() {
  //   setCart([]);
  // }

  // // State Derivado
  // const isEmpty = useMemo(() => cart.length === 0, [cart]);
  // // const cartTotal = () => cart.reduce((total, item) => total + (item.quantity * item.price), 0);
  // const cartTotal = useMemo(
  //   () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
  //   [cart]
  // );

  // return {
    // addToCart,
    // cart,
    // clearCart,
    // decreaseQuantity,
    // increaseQuantity,
    // removeFromCart,
    // isEmpty,
    // cartTotal,
//   };
// };
