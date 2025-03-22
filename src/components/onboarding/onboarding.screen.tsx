import { View, Text, ImageBackground, Image } from 'react-native'
import createStyles from '@/components/onboarding/onboarding.styles'
import assets from '@/assets'
import Button from '../button/button'

export default function OnboardingScreen() {
  const styles = createStyles()
  const { carBg, logo, overlayBg } = assets

  return (
    <ImageBackground resizeMode='cover' source={carBg} style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        source={overlayBg}
        style={styles.overLay}
      >
        <View>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.carLogo} resizeMode='contain' />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.title}>Autent</Text>
          </View>
        </View>
        <Button
          text='Get Started'
          buttonStyles={styles.buttonStyles}
          textStyles={styles.buttonText}
        />
      </ImageBackground>
    </ImageBackground>
  )
}
