import { colors } from "@/constants/themes";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const bgImage = require("../../assets/images/background.png");

const GetStarted = () => {
  const router = useRouter();
  return (
    <ImageBackground source={bgImage} style={styles.Background}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Simple way to</Text>
            <Text style={styles.title}>help control</Text>
            <Text style={styles.title}>your savings</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/(Auth)/welcome")}
            >
              <Text style={styles.buttonText}>Get Started</Text>
              <Ionicons name="arrow-forward" size={18} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.signInButton}>
              <Text style={styles.signInText}>
                Already have an account?{" "}
                <Link href={"/(Auth)/login"} style={styles.loginText}>
                  Login
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GetStarted;

export const styles = StyleSheet.create({
  Background: {
    flex: 1,
  },
  SafeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "flex-end",
  },
  textContainer: {
    alignItems: "flex-start",
    marginBottom: 60,
  },
  title: {
    fontFamily: "Raleway",
    fontSize: 40,
    color: colors.white,
    fontWeight: 600,
    lineHeight: 60,
    textAlign: "left",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    width: "85%",
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 22,
    justifyContent: "space-between",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 600,
  },
  signInText: {
    color: colors.white,
  },
  loginText: {
    fontWeight: 700,
  },
  signInButton: {
    padding: 20,
  },
});
