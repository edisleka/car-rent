import { colors } from '@/theme/colors'
import { FontSize } from '@/theme/font-size'
import { scale } from '@/theme/scale'
import { StyleSheet } from 'react-native'

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.info,
    },
    overLay: {
      flex: 1,
      paddingHorizontal: scale(18),
    },
    logoContainer: {
      backgroundColor: colors.white,
      padding: scale(5),
      alignSelf: 'flex-start',
      marginTop: scale(32),
      borderRadius: 100,
    },
    carLogo: {
      height: scale(60),
      width: scale(60),
    },
    title: {
      color: colors.white,
      fontSize: FontSize.FONT_40Px,
    },
    textContainer: {
      marginTop: scale(30),
    },
  })

export default createStyles
