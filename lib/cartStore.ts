import { Product } from 'models/Product';
import { create } from 'zustand';

// https://www.youtube.com/watch?v=3tobiO8zDDA
// https://github.com/Galaxies-dev/react-native-ecommerce

interface CartState {
  cartProducts: (Product & { quantity: number })[];
  totalPrice: number;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartProducts: [],
  totalPrice: 0,
  addProduct: (product: Product) =>
    set((state) => {
      // check if multiple shops
      const shopIds = new Set(state.cartProducts.map((p) => p.shop_id));

      if (shopIds.size > 1) {
        throw new Error(`single shop validation failed: ${shopIds}`);
      }

      const shopId = shopIds.values().next().value;

      if (shopId !== undefined && shopId !== product.shop_id) {
        throw new Error('ShopIdDiffer');
      }

      state.totalPrice += product.product_price;
      const hasProduct = state.cartProducts.find((p) => p.id === product.id);

      if (hasProduct) {
        return {
          cartProducts: state.cartProducts.map((p) => {
            if (p.id === product.id) {
              return { ...p, quantity: p.quantity + 1 };
            }
            return p;
          }),
        };
      } else {
        return {
          cartProducts: [...state.cartProducts, { ...product, quantity: 1 }],
        };
      }
    }),

  reduceProduct: (product: Product) =>
    set((state) => {
      state.totalPrice -= product.product_price;

      return {
        cartProducts: state.cartProducts
          .map((p) => {
            if (p.id === product.id) {
              return { ...p, quantity: p.quantity - 1 };
            }
            return p;
          })
          .filter((p) => p.quantity > 0),
      };
    }),

  clearCart: () =>
    set((state) => {
      state.totalPrice = 0;
      return { cartProducts: [] };
    }),
}));
