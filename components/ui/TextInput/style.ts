import { StyleSheet } from 'react-native';

const textInputStyle = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 38,
  },
  errorCircle: {
    textAlign: 'center',
    marginTop: 8,
  },
  containerError: {
    borderBottomColor: '#EF4444',
  },
  marginBottom: {
    marginBottom: 5,
  },
  label: {
    color: '#262626',
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 4,
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  rightIconInput: {
    paddingRight: 45,
  },
  leftIconInput: {
    paddingLeft: 45,
  },
  inputContainer: {
    fontWeight: '300',
    fontFamily: 'SFProTextRegular',
    minHeight: 48,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    color: '#222222',
    paddingHorizontal: 16,
  },
  required: {
    color: '#EF4444',
  },
  error: {
    color: '#EF4444',
    fontSize: 12,
  },
  success: {
    color: '#15803D',
  },
  rightIconContainer: {
    position: 'absolute',
    right: 16,
    height: '100%',
    justifyContent: 'center',
  },
  leftIconContainer: {
    position: 'absolute',
    left: 16,
    height: '100%',
    justifyContent: 'center',
  },
});

export default textInputStyle;
