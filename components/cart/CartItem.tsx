import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Minus, Plus, Trash2 } from 'lucide-react-native';
import { IconButton } from '../ui/IconButton';

interface CartItemProps {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartItem({
  id,
  name,
  brand,
  image,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: image }} style={styles.itemImage} />
      
      <View style={styles.itemDetails}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemBrand}>{brand}</Text>
          <Text style={styles.itemPrice}>{price}</Text>
        </View>

        <View style={styles.quantityControls}>
          <IconButton
            icon={Minus}
            variant="secondary"
            onPress={() => onUpdateQuantity(id, quantity - 1)}
          />

          <Text style={styles.quantity}>{quantity}</Text>

          <IconButton
            icon={Plus}
            variant="secondary"
            onPress={() => onUpdateQuantity(id, quantity + 1)}
          />

          <IconButton
            icon={Trash2}
            variant="danger"
            onPress={() => onRemove(id)}
            style={styles.removeButton}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  itemBrand: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563EB',
    marginTop: 4,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
  },
  removeButton: {
    marginLeft: 16,
  },
});