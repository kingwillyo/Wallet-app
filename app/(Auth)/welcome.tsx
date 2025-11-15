import { View, Text, KeyboardAvoidingView, StatusBar } from 'react-native'
import React from 'react'
import { Background } from '@react-navigation/elements'
import { SafeAreaView } from 'react-native-safe-area-context'

const welcome = () => {
  return (
    <Background>
      <StatusBar barStyle={'dark-content'}/>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View>
            <Text>get started</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Background>
  )
}

export default welcome