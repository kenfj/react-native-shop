import { CartProduct, Product } from 'models/Product';
import { create } from 'zustand';

// https://www.youtube.com/watch?v=3tobiO8zDDA
// https://github.com/Galaxies-dev/react-native-ecommerce

interface CartState {
  cartProducts: CartProduct[];
  total: () => number;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartProducts: [],

  total: () =>
    get()
      .cartProducts.map((_) => _.product_price * _.quantity)
      .reduce((sum, current) => sum + current, 0),

  addProduct: (product: Product) =>
    set((state) => {
      if (state.cartProducts.length > 0) {
        if (product.shop_id !== state.cartProducts[0].shop_id) {
          throw new Error('ShopIdDiffer');
        }
      }

      const hasProduct = state.cartProducts.find((p) => p.id === product.id);

      const updated = state.cartProducts.map((p) => ({
        ...p,
        quantity: p.quantity + (p.id === product.id ? 1 : 0),
      }));

      if (hasProduct) {
        return { cartProducts: updated };
      } else {
        return { cartProducts: [...updated, { ...product, quantity: 1 }] };
      }
    }),

  reduceProduct: (product: Product) =>
    set((state) => ({
      cartProducts: state.cartProducts
        .map((p) => ({
          ...p,
          quantity: p.quantity + (p.id === product.id ? -1 : 0),
        }))
        .filter((p) => p.quantity > 0),
    })),

  clearCart: () => set(() => ({ cartProducts: [] })),
}));
