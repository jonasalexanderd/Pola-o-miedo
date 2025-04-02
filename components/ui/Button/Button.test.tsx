import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '@/components/ui/Button/Button';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('applies the correct variant styles', () => {
    const { getByText } = render(<Button variant="danger">Delete</Button>);
    expect(getByText('Delete')).toBeTruthy();
  });

  it('triggers onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock}>Press me</Button>,
    );
    fireEvent.press(getByText('Press me'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
