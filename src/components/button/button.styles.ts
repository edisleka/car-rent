import { colors } from '@/theme/colors'
import { FontSize } from '@/theme/font-size'
import { scale } from '@/theme/scale'
import { StyleSheet } from 'react-native'

const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.button,
      borderRadius: scale(30),
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: scale(14),
    },
    text: {
      color: colors.white,
      fontSize: FontSize.FONT_16Px,
      fontWeight: '400',
    },
  })

export default createStyles
