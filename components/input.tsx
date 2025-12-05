import { colors } from "@/constants/themes";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

const Input = ({
  style,
  value,
  placeholder,
  keyboardType,
  autoCapitalize,
  textContentType,
  onChange,
  ...otherProps
}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        textContentType={textContentType}
        placeholderTextColor={colors.iconInactive}
        {...otherProps}
      />
    </View>
  );
};

export default Input;

export const styles = StyleSheet.create({
  container: {
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
});
