import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import slides from '@/slides'
import OnboardingItems from './OnboardingItems'

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OnboardingItems item={{
          ...item,
          image: item.image ?? item.Image // Ensure 'image' prop exists
        }} />}
        horizontal
        pagingEnabled
        bounces={false}
      />
    </View>
  )
}

export default Onboarding

export const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})