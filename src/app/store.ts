import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "./types/main";

type CartState = {
  useCartStore: any;
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: string) => void;
  isOpen: boolean;
  toggleCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set: any) => ({
    cart: [],
    isOpen: false,
    toggleCart: () => set((state: any) => ({ isOpen: !state.isOpen })),
  }),
  { name: 'cart-storage'}
  )
);
