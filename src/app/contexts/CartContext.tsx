'use client';

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { CartItem, Estampa, Tela, Cupon } from '@/types';
interface CartContextProps {
  cart: CartItem[];
  cartQty: number;
  actualTela: Tela;
  scalePopUp: boolean;
  cupon: Cupon | null;
  cartTotal: () => number;
  setScalePopUp: (value: boolean) => void;
  addCartItem: (item: CartItem) => void;
  removeCartItem: (item: CartItem) => void;
  removeCartItemBySku: (sku: string) => void;
  existsInCart: (sku: string) => boolean;
  findCartItemBySku: (sku: string) => CartItem | undefined;
  addEstampaToTela: (
    telaSku: string,
    estampa: Estampa,
    mts: number,
    scale: string
  ) => void;
  telaAvailable: (telaSku: string) => {
    telaTotal: number;
    estampasTotal: number;
    available: number;
  };
  removeEstampaBySku: (
    telaSku: string,
    estampaSku: string,
    estampaScale: string
  ) => void;
  handleSetActualtelas: (tela: Tela) => void;
  actualTelaInfo: () => CartItem | undefined;
  cartAvailable: () => number;
  setCart: (cart: CartItem[]) => void;
  setCupon: (cupon: Cupon | null) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [actualTela, setActualTela] = useState<Tela>({} as Tela);
  const [scalePopUp, setScalePopUp] = useState<boolean>(false);
  const [cupon, setCupon] = useState<Cupon | null>(null);

  // useEffect(() => {
  //   //JUST FOR DEBUGGING REMOVE LATER
  //   console.log(cart);
  // }, [cart]);

  //CART

  const cartQty = cart.length;

  const cartTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    return cupon ? total - (total * cupon.discount) / 100 : total;
  };

  const handleSetActualtelas = (tela: Tela) => {
    setActualTela(tela);
  };

  const actualTelaInfo = () =>
    cart.find((cartItem) => cartItem.tela.sku === actualTela.sku) || undefined;

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
    if (actualTela.sku === sku) setActualTela({} as Tela);
    setCart(cart.filter((cartItem) => cartItem.tela.sku !== sku));
  };

  const removeEstampaBySku = (
    telaSku: string,
    estampaSku: string,
    estampaScale: string
  ) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.tela.sku === telaSku) {
        const updatedEstampas = cartItem.estampas?.filter(
          (estampa) =>
            estampa.estampa.sku !== estampaSku || estampa.scale !== estampaScale
        );
        return {
          ...cartItem,
          estampas: updatedEstampas,
        };
      }
      return cartItem;
    });
    setCart(updatedCart as CartItem[]);
  };

  const findCartItemBySku = (sku: string) => {
    return cart.find((cartItem) => cartItem.tela.sku === sku);
  };

  const addEstampaToTela = (
    telaSku: string,
    estampa: Estampa,
    mts: number,
    scale: string
  ) => {
    const estampaItem = {
      estampa,
      mts,
      scale,
    };
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.tela.sku === telaSku) {
        const existingEstampa = cartItem.estampas?.find(
          (estampa) =>
            estampa.estampa.sku === estampaItem.estampa.sku &&
            estampa.scale === scale
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

  const cartAvailable = () => {
    return cart.reduce(
      (acc, cartItem) =>
        acc +
        cartItem.mts -
        (cartItem.estampas?.reduce((acc, estampa) => acc + estampa.mts, 0) ||
          0),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        cartQty,
        actualTela,
        scalePopUp,
        cupon,
        setCart,
        setScalePopUp,
        telaAvailable,
        addCartItem,
        removeCartItem,
        removeCartItemBySku,
        existsInCart,
        findCartItemBySku,
        addEstampaToTela,
        removeEstampaBySku,
        handleSetActualtelas,
        actualTelaInfo,
        cartAvailable,
        setCupon,
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
