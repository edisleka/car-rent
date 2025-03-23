import { TextStyle, ViewStyle } from 'react-native'

export interface InterfaceButtonProps {
  text: string
  buttonStyles?: ViewStyle
  textStyles?: TextStyle
  onPress?: () => void
}
