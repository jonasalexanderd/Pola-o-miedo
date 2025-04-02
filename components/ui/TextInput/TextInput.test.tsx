import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextInput from '@/components/ui/TextInput';
import { Eye, EyeOff } from 'lucide-react-native';

describe('TextInput Component', () => {
  it('renders correctly with a label', () => {
    const { getByText } = render(<TextInput label="Username" />);
    expect(getByText('Username')).toBeTruthy();
  });

  it('displays an error message when error is true', () => {
    const { getByText } = render(
      <TextInput error={true} errorMsg="Invalid input" />,
    );
    expect(getByText('Invalid input')).toBeTruthy();
  });

  it('calls onRightIcon when right icon is pressed', () => {
    const onRightIconMock = jest.fn();
    const { getByTestId } = render(
      <TextInput
        rightIcon={<Eye testID="right-icon" />}
        onRightIcon={onRightIconMock}
      />,
    );
    fireEvent.press(getByTestId('right-icon'));
    expect(onRightIconMock).toHaveBeenCalled();
  });

  it('calls onLeftIcon when left icon is pressed', () => {
    const onLeftIconMock = jest.fn();
    const { getByTestId } = render(
      <TextInput
        leftIcon={<EyeOff testID="left-icon" />}
        onLeftIcon={onLeftIconMock}
      />,
    );
    fireEvent.press(getByTestId('left-icon'));
    expect(onLeftIconMock).toHaveBeenCalled();
  });

  it('shows success message when provided', () => {
    const { getByText } = render(<TextInput successMessage="Success!" />);
    expect(getByText('Success!')).toBeTruthy();
  });
});
