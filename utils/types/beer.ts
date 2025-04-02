export interface Beer {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  stock: number;
}

export interface CartItem extends Beer {
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: string;
  addToCart: (beer: Beer) => void;
  removeFromCart: (beerId: number) => void;
  updateQuantity: (beerId: number, quantity: number) => void;
  getItemQuantity: (beerId: number) => number;
}
