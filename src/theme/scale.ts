import { Dimensions, Platform } from 'react-native'

const { height, width } = Dimensions.get('window')
const { height: heightScreen, width: widthScreen } = Dimensions.get('screen')

export const size = { height, width }
export const sizeScreen = { height: heightScreen, width: widthScreen }

const guidelineBaseWidth = width >= 768 ? 768 : 375
const guidelineBaseHeight =
  Platform.OS === 'ios'
    ? height >= 1024
      ? 1024
      : 812
    : height <= 550
    ? 667
    : 812
/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
const scale = (sizeValue: number) =>
  Math.ceil((width / guidelineBaseWidth) * sizeValue)
const verticalScale = (sizeValue: number) =>
  Math.ceil((height / guidelineBaseHeight) * sizeValue)
const moderateScale = (sizeValue: number, factor = 0.5) =>
  Math.ceil(sizeValue + (scale(sizeValue) - sizeValue) * factor)
const moderateVerticalScale = (sizeValue: number, factor = 0.5) =>
  Math.ceil(sizeValue + (verticalScale(sizeValue) - sizeValue) * factor)
const isIpad = () => width >= 768

export { isIpad, moderateScale, moderateVerticalScale, scale, verticalScale }

// import { Dimensions, Platform } from 'react-native'

// const { height, width } = Dimensions.get('window')
// const { height: heightScreen, width: widthScreen } = Dimensions.get('screen')

// const BASE_WIDTH = 375
// const BASE_HEIGHT = 812

// export const size = { height, width }
// export const sizeScreen = { height: heightScreen, width: widthScreen }

// const guidelineBaseWidth = width >= 768 ? 768 : BASE_WIDTH
// const guidelineBaseHeight =
//   Platform.OS === 'ios'
//     ? height >= 1024
//       ? 1024
//       : height >= 812
//       ? BASE_HEIGHT
//       : 667
//     : height <= 550
//     ? 667
//     : BASE_HEIGHT

// const scale = (sizeValue: number, factor = 1) =>
//   Math.ceil((width / guidelineBaseWidth) * sizeValue * factor)

// const verticalScale = (sizeValue: number, factor = 1) =>
//   Math.ceil((height / guidelineBaseHeight) * sizeValue * factor)

// const moderateScale = (sizeValue: number, factor = 0.5) =>
//   Math.ceil(sizeValue + (scale(sizeValue) - sizeValue) * factor)

// const moderateVerticalScale = (sizeValue: number, factor = 0.5) =>
//   Math.ceil(sizeValue + (verticalScale(sizeValue) - sizeValue) * factor)

// const isTablet = () =>
//   (width >= 768 && height >= 1024) || (height >= 768 && width >= 1024)

// export { isTablet, moderateScale, moderateVerticalScale, scale, verticalScale }
