import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Minus, Plus } from 'lucide-react-native';
import counterStyle from '@/components/ui/Counter/styles';

type CounterProps<T> = {
  updateQuantity: (elementId: T, quantity: number) => void;
  quantity: number;
  elementId: T;
};

const Counter = <T,>({
  updateQuantity,
  quantity,
  elementId,
}: CounterProps<T>) => {
  return (
    <View style={counterStyle.quantityContainer}>
      <TouchableOpacity
        style={counterStyle.quantityButton}
        onPress={() => updateQuantity(elementId, quantity - 1)}
      >
        <Minus size={20} color="#6B7280" />
      </TouchableOpacity>

      <Text style={counterStyle.quantity}>{quantity}</Text>

      <TouchableOpacity
        style={counterStyle.quantityButton}
        onPress={() => updateQuantity(elementId, quantity + 1)}
      >
        <Plus size={20} color="#6B7280" />
      </TouchableOpacity>
    </View>
  );
};

export { Counter };
