import { useCartStore } from '@/store/cartStore';
import { CartLayout } from '@/components/layout/cart/CartLayout';

export default function CartScreen() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } =
    useCartStore();
  return (
    <CartLayout
      updateQuantity={updateQuantity}
      cartItems={items}
      totalItems={totalItems}
      removeFromCart={removeFromCart}
      totalPrice={totalPrice}
    />
  );
}
