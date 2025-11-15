import { View, Text, KeyboardAvoidingView, StatusBar, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Background } from '@react-navigation/elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '@/constants/themes'
import { styles } from '@/styles/auth'
import Input from '@/components/input'
import { Ionicons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Link } from 'expo-router'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Background style={styles.Background}>
      <StatusBar barStyle={'dark-content'}/>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView style={styles.keyboard}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Create a New Account</Text>
              <Text style={styles.subtitle}>Create an account so you can manage</Text>
              <Text style={styles.subtitle}>your personal finances</Text>
            </View>
              <Input 
                placeholder='Name'
                value={name}
                onChangeText={setName}
              />
              <Input
                placeholder='Email Address'
                value={email}
                onChange={setEmail}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
              />
              <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input} 
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={!showPassword? 'eye-off-outline' : 'eye-outline'}
                    size={16}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.checkBoxContainer}>
                <View style={styles.checkBox} >
                </View>
                <Text style={styles.terms}>I agree to the <Link href={'/(Auth)/signup'} style={styles.link}>Terms and Conditions</Link> and {'\n'}<Link href={'/(Auth)/signup'} style={styles.link}>Privacy Policy</Link></Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>
              <View style={styles.footer}>
              <Text style={styles.footerText}>
                  Already have an account?{" "}
                <Link href={"/(Auth)/login"} style={styles.footerLink}>
                  Login
                </Link>
              </Text>
            </View>         
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </Background>
  )
}

export default Signup
