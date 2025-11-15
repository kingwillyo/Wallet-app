import { StyleSheet } from "react-native"
import { colors } from "@/constants/themes";

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    keyboard: {
      flex: 1,
      position: "relative",
    },
    Background: {
      backgroundColor: colors.white,
    },
    container: {
      paddingHorizontal: 32,
      paddingBottom: '50%',
    },
    textContainer: {
      marginBottom: 30,
      width: '100%',
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: colors.primary,
      marginTop: 45,
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 14,
      fontWeight: 400,
      color: colors.textGrey,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      color: colors.textGrey,
      marginBottom: 30,
    },
    faceContainer: {
      alignItems: "center",
      marginBottom: 30,
    },
    face: {
      height: 28,
      width: 28,
    },
    forget: {
      color: colors.blueText,
      fontSize: 16,
      fontWeight: 400,
    },
    forgetContainer: {
      alignItems: "center",
      marginBottom: 130,
    },
    inputContainer: {
      backgroundColor: colors.form,
      width: "100%",
      height: 45,
      padding: 12,
      borderRadius: 10,
      marginBottom: 32,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    input: {
      width: "80%",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      height: 60,
      borderRadius: 16,
    },
    buttonText: {
      color: colors.white,
      fontSize: 20,
      fontWeight: 400,
    },
    footer: {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
    footerText: {
      fontSize: 14,
      fontWeight: 300,
    },
    footerLink: {
      fontSize: 14,
      fontWeight: 600,
    },
    checkBoxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 130,
    },
    checkBox: {
      height: 14,
      width: 14,
      borderRadius: 3,
      backgroundColor: colors.form,
    },
    terms: {
      fontSize: 12,
      fontWeight: 400,
    },
    link: {
      color: colors.secondary,
    },
  });
  