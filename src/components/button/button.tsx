import { View, Text, Pressable } from 'react-native'
import createStyles from './button.styles'
import { InterfaceButtonProps } from './interfaceButtonProps'
export default function Button({
  text,
  textStyles,
  buttonStyles,
}: InterfaceButtonProps) {
  const styles = createStyles()

  return (
    <Pressable style={[styles.container, buttonStyles]}>
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  )
}
