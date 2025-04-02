import React, { FC } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { Search } from 'lucide-react-native';
import { FEATURED_IMAGE } from '@/utils/config/home';
import homeStyles from '@/components/layout/home/styles';
import { Beer } from '@/utils/types';
import { ProductItem } from '@/components/products/ProductItem/ProductItem';
import TextInput from '@/components/ui/TextInput';

type HomeLayoutProps = {
  getItemQuantity: (beerId: number) => number;
  updateQuantity: (beerId: number, quantity: number) => void;
  addToCart: (beer: Beer) => void;
  beers: Beer[];
  search: string;
  onSearch: (value: string) => void;
};

const HomeLayout: FC<HomeLayoutProps> = ({
  getItemQuantity,
  updateQuantity,
  addToCart,
  beers,
  search,
  onSearch,
}) => {
  return (
    <ScrollView
      style={homeStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={homeStyles.searchContainer}>
        <TextInput
          value={search}
          onChangeText={onSearch}
          leftIcon={<Search size={20} color="#8E8E93" />}
          placeholder="Search beers by name or brand..."
        />
      </View>
      <FlatList
        data={beers}
        style={homeStyles.itemsContainer}
        renderItem={({ item: beer }) => (
          <ProductItem
            beer={beer}
            getItemQuantity={getItemQuantity}
            updateQuantity={updateQuantity}
            addToCart={addToCart}
          />
        )}
        ListEmptyComponent={
          <View style={homeStyles.emptyContainer}>
            <Image
              source={{
                uri: 'https://static3.bigstockphoto.com/3/5/3/large1500/353652182.jpg',
              }}
              style={homeStyles.emptyImageStyle}
            />
            <Text>We seem to have drunk all the beers.</Text>
          </View>
        }
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <View style={homeStyles.featuredContainer}>
            <Image
              source={{ uri: FEATURED_IMAGE }}
              style={homeStyles.featuredImage}
            />
            <View style={homeStyles.featuredContent}>
              <Text style={homeStyles.featuredTitle}>Summer Collection</Text>
              <Text style={homeStyles.featuredSubtitle}>
                Refresh your summer with our premium beers
              </Text>
            </View>
          </View>
        }
      />
    </ScrollView>
  );
};

export { HomeLayout };
