'use client';

import { createContext, useState, useContext, ReactNode } from 'react';
import { CartItem } from '@/types';

interface CartContextProps {
  cart: CartItem[];
  cartTotal: number;
  cartQty: number;
  addCartItem: (item: CartItem) => void;
  removeCartItem: (item: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
  const cartTotal = 3
  const cartQty = cart.length;

  const addCartItem = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const removeCartItem = (item: CartItem) => {
    setCart(
      cart.filter((cartItem) => cartItem.tela.telaId !== item.tela.telaId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        cartQty,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};

export default CartContext;
