import { createContext, useContext, useState, ReactNode } from 'react';

interface Beer {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  stock: number;
}

interface CartItem extends Beer {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (beer: Beer) => void;
  removeFromCart: (beerId: number) => void;
  updateQuantity: (beerId: number, quantity: number) => void;
  getItemQuantity: (beerId: number) => number;
  totalItems: number;
  totalPrice: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (beer: Beer) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === beer.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === beer.id
            ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
            : item
        );
      }

      return [...currentItems, { ...beer, quantity: 1 }];
    });
  };

  const removeFromCart = (beerId: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== beerId));
  };

  const updateQuantity = (beerId: number, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === beerId
          ? { ...item, quantity: Math.min(Math.max(0, quantity), item.stock) }
          : item
      )
    );
  };

  const getItemQuantity = (beerId: number) => {
    return items.find(item => item.id === beerId)?.quantity || 0;
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items
    .reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + price * item.quantity;
    }, 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemQuantity,
        totalItems,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}