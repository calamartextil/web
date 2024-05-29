'use client';

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { CartItem, Estampa } from '@/types';
import { getEstampaBySku } from '../database/staticContent';

interface CartContextProps {
  cart: CartItem[];
  cartTotal: number;
  cartQty: number;
  addCartItem: (item: CartItem) => void;
  removeCartItem: (item: CartItem) => void;
  removeCartItemBySku: (sku: string) => void;
  existsInCart: (sku: string) => boolean;
  findCartItemBySku: (sku: string) => CartItem | undefined;
  addEstampaToTela: (
    telaSku: string,
    estampaSku: string,
    mts: number,
    scale: string
  ) => void;
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
    //JUST FOR DEBUGGING REMOVE LATER
    console.log(cart);
  }, [cart]);

  //CART

  const existsInCart = (sku: string) => {
    return cart.some((cartItem) => cartItem.tela.sku === sku);
  };

  const addCartItem = (item: CartItem) => {
    setCart([...cart, item]);
  };

  const removeCartItem = (item: CartItem) => {
    setCart(
      cart.filter((cartItem) => cartItem.tela.telaId !== item.tela.telaId)
    );
  };

  const removeCartItemBySku = (sku: string) => {
    setCart(cart.filter((cartItem) => cartItem.tela.sku !== sku));
  };

  const findCartItemBySku = (sku: string) => {
    return cart.find((cartItem) => cartItem.tela.sku === sku);
  };

  const addEstampaToTela = (
    telaSku: string,
    estampaSku: string,
    mts: number,
    scale: string
  ) => {
    const estampa = getEstampaBySku(estampaSku) || ({} as Estampa);
    const estampaItem = {
      estampa,
      mts,
      scale,
    };
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.tela.sku === telaSku) {
        return {
          ...cartItem,
          estampas: [...(cartItem.estampas || []), estampaItem],
        };
      }
      return cartItem;
    });
    setCart(updatedCart as CartItem[]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        cartQty,
        addCartItem,
        removeCartItem,
        removeCartItemBySku,
        existsInCart,
        findCartItemBySku,
        addEstampaToTela,
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
