'use client';

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { CartItem } from '@/types';

interface CartContextProps {
  cart: CartItem[];
  cartTotal: number;
  cartQty: number;
  addCartItem: (item: CartItem) => void;
  removeCartItem: (item: CartItem) => void;
  existsInCart: (sku: string) => boolean;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
  const cartQty = cart.length;

  const addCartItem = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const existsInCart = (sku: string) => {
    return cart.some((cartItem) => cartItem.tela.sku === sku);
  };

  const sumarizeCartItemsByTela = (cart: CartItem[]) => {
    return cart.reduce((acc, item) => {
      const existingItem = acc.find(
        (cartItem) => cartItem.tela.telaId === item.tela.telaId
      );
      if (existingItem) {
        existingItem.mts += item.mts;
        existingItem.price += item.price;
        return acc;
      }
      return [...acc, item];
    }, [] as CartItem[]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
        existsInCart,
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
