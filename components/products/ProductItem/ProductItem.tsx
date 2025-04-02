import React, { FC } from 'react';
import homeStyles from '@/components/layout/home/styles';
import { Image, Text, View } from 'react-native';
import { Beer } from '@/utils/types';
import { Counter } from '@/components/ui/Counter/Counter';
import { Button } from '@/components/ui/Button';

type ProductItemProps = {
  beer: Beer;
  getItemQuantity: (beerId: number) => number;
  addToCart: (beer: Beer) => void;
  updateQuantity: (beerId: number, quantity: number) => void;
};

const ProductItem: FC<ProductItemProps> = ({
  beer,
  updateQuantity,
  getItemQuantity,
  addToCart,
}) => {
  const quantity = getItemQuantity(beer.id);
  return (
    <View key={beer.id} style={homeStyles.itemCard}>
      <View style={homeStyles.imageContainer}>
        <Image source={{ uri: beer.image }} style={homeStyles.itemImage} />
        <View style={homeStyles.stockBadge}>
          <Text style={homeStyles.stockText}>{beer.stock} available</Text>
        </View>
      </View>
      <View style={homeStyles.itemContent}>
        <View style={homeStyles.itemHeader}>
          <View style={homeStyles.titleContainer}>
            <Text style={homeStyles.itemTitle}>{beer.name}</Text>
            <Text style={homeStyles.brandName}>{beer.brand}</Text>
          </View>
          <Text style={homeStyles.itemPrice}>{beer.price}</Text>
        </View>
        {quantity === 0 ? (
          <Button onPress={() => addToCart(beer)}>
            <Text style={homeStyles.addButtonText}>Add to Cart</Text>
          </Button>
        ) : (
          <Counter
            quantity={quantity}
            updateQuantity={updateQuantity}
            elementId={beer.id}
          />
        )}
      </View>
    </View>
  );
};

export { ProductItem };
