import { colors } from "@/constants/themes";
import React from "react";
import { StyleSheet, View } from "react-native";

const Paginator = ({ currentIndex, total }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[styles.dot, currentIndex === i ? styles.activeDot : null]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#bbb",
    marginHorizontal: 5,
  },
  activeDot: {
    width: 18,
    backgroundColor: colors.orange,
  },
});

export default Paginator;
