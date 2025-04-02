import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Plus, Minus } from 'lucide-react-native';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { IconButton } from '../ui/IconButton';

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  stock: number;
  quantity: number;
  onAdd: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

export function ProductCard({
  name,
  brand,
  image,
  price,
  stock,
  quantity,
  onAdd,
  onUpdateQuantity,
}: ProductCardProps) {
  return (
    <View style={styles.itemCard}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.itemImage} />
        <View style={styles.stockBadge}>
          <Badge variant="secondary">
            {stock} available
          </Badge>
        </View>
      </View>
      
      <View style={styles.itemContent}>
        <View style={styles.itemHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>{name}</Text>
            <Text style={styles.brandName}>{brand}</Text>
          </View>
          <Text style={styles.itemPrice}>{price}</Text>
        </View>
        
        {quantity === 0 ? (
          <Button onPress={onAdd}>
            <View style={styles.addButtonContent}>
              <Plus size={20} color="#fff" />
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </View>
          </Button>
        ) : (
          <View style={styles.quantityContainer}>
            <IconButton
              icon={Minus}
              variant="secondary"
              onPress={() => onUpdateQuantity(quantity - 1)}
            />
            
            <Text style={styles.quantity}>{quantity}</Text>
            
            <IconButton
              icon={Plus}
              variant="secondary"
              onPress={() => onUpdateQuantity(quantity + 1)}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    height: 200,
  },
  stockBadge: {
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
  itemContent: {
    padding: 16,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
    marginRight: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  brandName: {
    fontSize: 14,
    color: '#6B7280',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563EB',
  },
  addButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
  },
});