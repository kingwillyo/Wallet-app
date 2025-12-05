import Input from "@/components/input";
import { colors } from "@/constants/themes";
import { styles } from "@/styles/auth";
import { Ionicons } from "@expo/vector-icons";
import { Background } from "@react-navigation/elements";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { supabase } from "@/lib/superbase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [Loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <Background style={styles.Background}>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView style={styles.keyboard}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Create a New Account</Text>
              <Text style={styles.subtitle}>
                Create an account so you can manage
              </Text>
              <Text style={styles.subtitle}>your personal finances</Text>
            </View>
            <Input placeholder="Name" value={name} onChangeText={setName} />
            <Input
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType={"email-address"}
              autoCapitalize={"none"}
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={!showPassword ? "eye-off-outline" : "eye-outline"}
                  size={16}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.checkBoxContainer}
              onPress={() => setAgreed(!agreed)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.checkBox,
                  agreed && {
                    backgroundColor: colors.secondary,
                    borderColor: colors.primary,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                {/* Show check icon if checked */}
                {agreed && <Ionicons name="checkmark" size={10} color="#fff" />}
              </View>
              <Text style={styles.terms}>
                I agree to the{" "}
                <Link href={"/(Auth)/signup"} style={styles.link}>
                  Terms and Conditions
                </Link>{" "}
                and {"\n"}
                <Link href={"/(Auth)/signup"} style={styles.link}>
                  Privacy Policy
                </Link>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {signUpWithEmail()}} disabled={Loading}>
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
  );
};

export default Signup;
