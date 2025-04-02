import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Counter } from '@/components/ui/Counter/Counter';

describe('Counter Component', () => {
  it('renders correctly with initial quantity', () => {
    const { getByText } = render(
      <Counter updateQuantity={jest.fn()} quantity={3} elementId={1} />,
    );
    expect(getByText('3')).toBeTruthy();
  });

  it('calls updateQuantity with the correct value when incrementing', () => {
    const updateQuantityMock = jest.fn();
    const { getByText } = render(
      <Counter
        updateQuantity={updateQuantityMock}
        quantity={5}
        elementId={1}
      />,
    );
    fireEvent.press(getByText('5').parent?.children[2]);
    expect(updateQuantityMock).toHaveBeenCalledWith(1, 6);
  });

  it('calls updateQuantity with the correct value when decrementing', () => {
    const updateQuantityMock = jest.fn();
    const { getByText } = render(
      <Counter
        updateQuantity={updateQuantityMock}
        quantity={5}
        elementId={1}
      />,
    );
    fireEvent.press(getByText('5').parent?.children[0]);
    expect(updateQuantityMock).toHaveBeenCalledWith(1, 4);
  });
});
