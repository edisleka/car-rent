import { View, Text, Pressable } from 'react-native'
import createStyles from './button.styles'
import { InterfaceButtonProps } from './InterfaceButtonProps'

export default function Button({
  text,
  textStyles,
  buttonStyles,
  onPress,
}: InterfaceButtonProps) {
  const styles = createStyles()

  return (
    <Pressable style={[styles.container, buttonStyles]} onPress={onPress}>
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  )
}
