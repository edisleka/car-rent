import { Redirect } from 'expo-router'
import { Text, View } from 'react-native'

export default function Index() {
  // return (
  //   <View>
  //     <Text>Home</Text>
  //   </View>
  // )
  return <Redirect href='/(auth)/(onBoardingScreens)/onboardingone' />
}
