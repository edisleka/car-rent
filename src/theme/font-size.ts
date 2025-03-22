import { scale } from '@/theme/scale'

// Type for the generated font sizes object
type FontSizes = {
  [key: string]: number
}

// Generate a range of font sizes based on a given array of sizes
const generateFontSizes = (sizes: number[]) => {
  return sizes.reduce((acc: FontSizes, size: number) => {
    acc[`FONT_${size}Px`] = scale(size)
    return acc
  }, {})
}

// Array of font sizes
const fontSizeArray: number[] = [
  5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27,
  28, 29, 30, 40, 45, 50, 60, 70, 80, 90, 100,
]

// Export the generated font sizes
export const FontSize = generateFontSizes(fontSizeArray)
