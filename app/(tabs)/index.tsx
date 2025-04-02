import { useCartStore } from '@/store/cartStore';
import { HomeLayout } from '@/components/layout/home/HomeLayout';
import { useMemo, useState } from 'react';
import { BEERS } from '@/utils/config/home';

export default function HomeScreen() {
  const { addToCart, updateQuantity, getItemQuantity } = useCartStore();
  const [search, setSearch] = useState<string>('');

  const beersFiltered = useMemo(
    () => BEERS.filter(beer => beer.name.includes(search)),
    [search],
  );
  return (
    <HomeLayout
      beers={beersFiltered}
      search={search}
      onSearch={setSearch}
      getItemQuantity={getItemQuantity}
      updateQuantity={updateQuantity}
      addToCart={addToCart}
    />
  );
}
