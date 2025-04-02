import React, { FC } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Trash2 } from 'lucide-react-native';
import cartStyle from '@/components/layout/cart/styles';
import { Beer } from '@/utils/types';
import { Counter } from '@/components/ui/Counter/Counter';
import { Button } from '@/components/ui/Button/Button';

type CartLayoutProps = {
  totalItems: number;
  cartItems: (Beer & { quantity: number })[];
  updateQuantity: (beerId: number, quantity: number) => void;
  removeFromCart: (beerId: number) => void;
  totalPrice: string;
};

const CartLayout: FC<CartLayoutProps> = ({
  totalItems,
  cartItems,
  removeFromCart,
  totalPrice,
  updateQuantity,
}) => {
  return (
    <View style={cartStyle.container}>
      <FlatList
        style={cartStyle.itemList}
        data={cartItems}
        ListEmptyComponent={
          <View style={cartStyle.emptyContainer}>
            <Text style={cartStyle.emptyText}>Your cart is empty</Text>
            <Text style={cartStyle.emptySubtext}>
              Add some beers to get started!
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View key={item.id} style={cartStyle.cartItem}>
            <Image source={{ uri: item.image }} style={cartStyle.itemImage} />
            <View style={cartStyle.itemDetails}>
              <View style={cartStyle.itemInfo}>
                <Text style={cartStyle.itemName}>{item.name}</Text>
                <Text style={cartStyle.itemBrand}>{item.brand}</Text>
                <Text style={cartStyle.itemPrice}>{item.price}</Text>
              </View>

              <View style={cartStyle.quantityControls}>
                <Counter
                  updateQuantity={updateQuantity}
                  quantity={item.quantity}
                  elementId={item.id}
                />
                <TouchableOpacity
                  onPress={() => removeFromCart(item.id)}
                  style={cartStyle.removeButton}
                >
                  <Trash2 size={20} color="#EF4444" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      {cartItems.length > 0 && (
        <View style={cartStyle.footer}>
          <View style={cartStyle.totalContainer}>
            <View>
              <Text style={cartStyle.totalLabel}>
                Total ({totalItems} items)
              </Text>
              <Text style={cartStyle.totalAmount}>{totalPrice}</Text>
            </View>
          </View>
          <Button>
            <Text style={cartStyle.checkoutText}>Checkout</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export { CartLayout };
