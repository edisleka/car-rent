import { View, Text, ImageBackground, Image } from 'react-native'
import createStyles from '@/components/onBoarding/onBoardingTwo/onBoardingTwo.styles'
import assets from '@/assets'
import Button from '../../button/button'
import { useRouter } from 'expo-router'
export default function OnBoardingTwo() {
  const router = useRouter()
  const styles = createStyles()
  const { carBg, logo, overlayBg, car } = assets

  return (
    <ImageBackground resizeMode='cover' source={car} style={styles.container}>
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
            <Text style={styles.titleTwo}>Lets Start</Text>
            <Text style={styles.titleTwo}>A New Experience</Text>
            <Text style={styles.titleTwo}>With Car rental</Text>
          </View>
        </View>
        <View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
              Discover your next adventure with Autent. We're here to provide
              you with a seamless car rental experience. Let's get started on
              your journey.
            </Text>
          </View>

          <Button
            onPress={() => router.push('/onboardingtwo')}
            text='Get Started'
            buttonStyles={styles.buttonStyles}
            textStyles={styles.buttonText}
          />
        </View>
      </ImageBackground>
    </ImageBackground>
  )
}
