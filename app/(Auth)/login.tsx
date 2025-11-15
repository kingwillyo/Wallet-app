import Input from "@/components/input";
import { colors } from "@/constants/themes";
import { Ionicons } from "@expo/vector-icons";
import { Background } from "@react-navigation/elements";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/auth";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const faceId = require("../../assets/images/face.png");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Background style={styles.Background}>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView style={styles.keyboard}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Welcome Back 👋</Text>
              <Text style={styles.subtitle}>
                I am so happy to see you can continue to
              </Text>
              <Text style={styles.subtitle2}>login to mange your finance</Text>
            </View>
            <Input
              placeholder={"Email Address"}
              keyboardType={"email-address"}
              value={email}
              onChangeText={setEmail}
              autoCapitalize={"none"}
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                keyboardType="email-address"
                autoCapitalize="none"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={16}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.faceContainer}>
              <TouchableOpacity>
                <Image source={faceId} />
              </TouchableOpacity>
            </View>
            <View style={styles.forgetContainer}>
              <TouchableOpacity>
                <Link href={'/(Auth)/login'} style={styles.forget}>Forgot Password?</Link>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don&apos;t have an account?{" "}
              <Link href={"/(Auth)/signup"} style={styles.footerLink}>
                Sign up
              </Link>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </Background>
  );
};

export default Login;

