import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendNotification } from '@/utils/notifications';
import { CartItem, CartStore } from '@/utils/types';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: '$0.00',

      addToCart: (beer) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === beer.id);

        if (existingItem) {
          get().updateQuantity(beer.id, existingItem.quantity + 1);
          return;
        }

        set(state => {
          const newItems = [...state.items, { ...beer, quantity: 1 }];
          sendNotification(
            'Added to Cart',
            `${beer.name} has been added to your cart`
          );
          return {
            items: newItems,
            totalItems: calculateTotalItems(newItems),
            totalPrice: calculateTotalPrice(newItems),
          };
        });
      },

      removeFromCart: (beerId) => {
        const item = get().items.find(item => item.id === beerId);
        if (!item) return;

        set(state => {
          const newItems = state.items.filter(item => item.id !== beerId);
          sendNotification(
            'Removed from Cart',
            `${item.name} has been removed from your cart`
          );
          return {
            items: newItems,
            totalItems: calculateTotalItems(newItems),
            totalPrice: calculateTotalPrice(newItems),
          };
        });
      },

      updateQuantity: (beerId, quantity) => {
        const currentItem = get().items.find(item => item.id === beerId);
        if (!currentItem) return;

        set(state => {
          const newItems = state.items.map(item =>
            item.id === beerId
              ? { ...item, quantity: Math.min(Math.max(0, quantity), item.stock) }
              : item
          ).filter(item => item.quantity > 0);

          if (quantity === 0) {
            sendNotification(
              'Removed from Cart',
              `${currentItem.name} has been removed from your cart`
            );
          } else if (quantity > currentItem.quantity) {
            sendNotification(
              'Cart Updated',
              `Added another ${currentItem.name} to your cart`
            );
          } else if (quantity < currentItem.quantity) {
            sendNotification(
              'Cart Updated',
              `Removed one ${currentItem.name} from your cart`
            );
          }

          return {
            items: newItems,
            totalItems: calculateTotalItems(newItems),
            totalPrice: calculateTotalPrice(newItems),
          };
        });
      },

      getItemQuantity: (beerId) => {
        return get().items.find(item => item.id === beerId)?.quantity || 0;
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

function calculateTotalItems(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

function calculateTotalPrice(items: CartItem[]): string {
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  return total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}
