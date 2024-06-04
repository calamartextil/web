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
  telaAvailable: (telaSku: string) => {
    telaTotal: number;
    estampasTotal: number;
    available: number;  
  };
  removeEstampaBySku: (telaSku: string, estampaSku: string, estampaScale: string) => void;
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

  const removeEstampaBySku = (telaSku: string, estampaSku: string, estampaScale: string) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.tela.sku === telaSku) {
        const updatedEstampas = cartItem.estampas?.filter(
          (estampa) => estampa.estampa.sku !== estampaSku || estampa.scale !== estampaScale
        );
        return {
          ...cartItem,
          estampas: updatedEstampas,
        };
      }
      return cartItem;
    });
    setCart(updatedCart as CartItem[]);
  }

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
        const existingEstampa = cartItem.estampas?.find(
          (estampa) =>
            estampa.estampa.sku === estampaSku && estampa.scale === scale
        );
        if (existingEstampa) {
          existingEstampa.mts += mts;
        } else {
          return {
            ...cartItem,
            estampas: [...(cartItem.estampas || []), estampaItem],
          };
        }
      }
      return cartItem;
    });
    setCart(updatedCart as CartItem[]);
  };

  const telaAvailable = (telaSku: string) => {
    return {
      telaTotal:
        cart.find((cartItem) => cartItem.tela.sku === telaSku)?.mts || 0,
      estampasTotal:
        cart
          .find((cartItem) => cartItem.tela.sku === telaSku)
          ?.estampas?.reduce((acc, estampa) => acc + estampa.mts, 0) || 0,
      available:
        (cart.find((cartItem) => cartItem.tela.sku === telaSku)?.mts || 0) -
        (cart
          .find((cartItem) => cartItem.tela.sku === telaSku)
          ?.estampas?.reduce((acc, estampa) => acc + estampa.mts, 0) || 0),
    };
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        cartQty,
        telaAvailable,
        addCartItem,
        removeCartItem,
        removeCartItemBySku,
        existsInCart,
        findCartItemBySku,
        addEstampaToTela,
        removeEstampaBySku
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
