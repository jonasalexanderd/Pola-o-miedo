import React from 'react';
import {
  TextInput as Input,
  View,
  TextInputProps,
  TouchableOpacity,
  Text,
} from 'react-native';
// Styles
import textInputStyle from './style';

interface TextInputPropsInterface extends TextInputProps {
  error?: boolean;
  errorMsg?: string;
  label?: string;
  required?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  onRightIcon?: () => void;
  onLeftIcon?: () => void;
  successMessage?: string;
}

const TextInput = (props: TextInputPropsInterface) => {
  const {
    successMessage,
    onRightIcon,
    error = false,
    rightIcon,
    leftIcon,
    errorMsg = '',
    label,
    required = false,
    onLeftIcon,
  } = props;
  return (
    <View style={textInputStyle.marginBottom}>
      <View
        style={[
          textInputStyle.container,
          error ? textInputStyle.containerError : {},
        ]}
      >
        {label && (
          <Text style={textInputStyle.label}>
            {label}
            {required ? <Text style={textInputStyle.required}> *</Text> : ''}
          </Text>
        )}
        <View>
          <Input
            {...props}
            style={[
              textInputStyle.inputContainer,
              rightIcon ? textInputStyle.rightIconInput : {},
              leftIcon ? textInputStyle.leftIconInput : {},
              error ? textInputStyle.inputError : {},
            ]}
            placeholderTextColor={'#A8a8a8'}
          />
          {rightIcon !== undefined && (
            <TouchableOpacity
              style={textInputStyle.rightIconContainer}
              onPress={onRightIcon}
            >
              {rightIcon}
            </TouchableOpacity>
          )}
          {leftIcon !== undefined && (
            <TouchableOpacity
              disabled={onLeftIcon === undefined}
              style={textInputStyle.leftIconContainer}
              onPress={onLeftIcon}
            >
              {leftIcon}
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Text style={textInputStyle.error}>{errorMsg}</Text>
      {successMessage !== undefined && (
        <Text style={[textInputStyle.error, textInputStyle.success]}>
          {successMessage}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
