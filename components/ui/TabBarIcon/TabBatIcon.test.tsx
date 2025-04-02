import React from 'react';
import { render } from '@testing-library/react-native';
import { TabBarIcon } from '@/components/ui/TabBarIcon/TabBarIcon';
import { ShoppingCart } from 'lucide-react-native';

describe('TabBarIcon Component', () => {
  it('renders correctly with an icon', () => {
    const { getByTestId } = render(
      <TabBarIcon icon={<ShoppingCart testID="icon" />} />,
    );
    expect(getByTestId('icon')).toBeTruthy();
  });

  it('does not render badge when showBadge is false', () => {
    const { queryByTestId } = render(
      <TabBarIcon icon={<ShoppingCart />} showBadge={false} />,
    );
    expect(queryByTestId('badge')).toBeNull();
  });

  it('renders badge with correct number when showBadge is true', () => {
    const { getByText } = render(
      <TabBarIcon icon={<ShoppingCart />} showBadge={true} totalBadged={5} />,
    );
    expect(getByText('5')).toBeTruthy();
  });
});
