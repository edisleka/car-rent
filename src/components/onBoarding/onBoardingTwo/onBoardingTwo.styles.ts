import { colors } from '@/theme/colors'
import { FontSize } from '@/theme/font-size'
import { scale } from '@/theme/scale'
import { StyleSheet } from 'react-native'

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    overLay: {
      flex: 1,
      paddingHorizontal: scale(18),
      justifyContent: 'space-between',
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
    titleTwo: {
      color: colors.white,
      fontSize: FontSize.FONT_30Px,
    },
    textContainer: {
      marginTop: scale(30),
    },
    buttonStyles: {
      marginBottom: scale(32),
    },
    buttonText: {
      fontWeight: '500',
    },
    infoTextContainer: {
      marginBottom: scale(32),
    },
    infoText: {
      color: colors.white,
      fontSize: FontSize.FONT_14Px,
      fontWeight: '400',
    },
  })

export default createStyles
