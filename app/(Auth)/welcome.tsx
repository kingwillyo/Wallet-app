import { View, Text, KeyboardAvoidingView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { Background } from '@react-navigation/elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Onboarding from '@/components/onboarding'
import { colors } from '@/constants/themes'

const welcome = () => {
  return (
    <Background style={styles.background}>
      <StatusBar barStyle={'dark-content'}/>
      <SafeAreaView>
        <View style={styles.onboarding}>
          <Onboarding />
        </View>
      </SafeAreaView>
    </Background>
  )
}

export default welcome

export const styles = StyleSheet.create ({
  background: {
    backgroundColor: colors.white,
  },
  onboarding: {
    alignItems: 'center'
  }
})