import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='index' />
      <Tabs.Screen name='about' />
    </Tabs>
  )
}
