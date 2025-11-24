import { colors } from "@/constants/themes";
import slides from "@/slides";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import type { ViewToken } from "react-native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OnboardingItems from "./OnboardingItems";
import Paginator from "./paginator";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList | null>(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const router = useRouter();

  const scrollToIndex = (index: number) => {
    if (slidesRef.current) {
      (slidesRef.current as FlatList).scrollToIndex({ index });
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };
  const handleSkip = () => {
    scrollToIndex(slides.length - 1);
  };

  const viewableItemsChanged = useRef(
    (info: { viewableItems: ViewToken[] }) => {
      // Safely find the first item with a valid index
      const item = info.viewableItems.find(
        (item) => typeof item.index === "number"
      );
      setCurrentIndex((item && item.index !== null ? item.index : 0) as number);
    }
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.skipContainer}>
        <Text style={styles.buttonText} onPress={handleSkip}>
          Skip
        </Text>
      </View>
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OnboardingItems
            item={{
              ...item,
              image: item.image ?? item.Image,
            }}
          />
        )}
        horizontal
        pagingEnabled
        bounces={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
        showsHorizontalScrollIndicator={false}
      />
      <Paginator currentIndex={currentIndex} total={slides.length} />
      <View style={styles.buttonRow}>
        <Text
          style={[styles.buttonText, currentIndex === 0 && styles.disabled]}
          onPress={handlePrev}
        >
          Previous
        </Text>
        <Text
          style={[
            styles.buttonText,
            currentIndex === slides.length - 1 && styles.disabled,
          ]}
          onPress={handleNext}
        >
          Next
        </Text>
      </View>
      {currentIndex === slides.length - 1 && (
        <TouchableOpacity
          style={styles.getStartedBtn}
          onPress={() => router.push("/(Auth)/signup")}
          activeOpacity={0.85}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
          <Text style={styles.getStartedArrow}>{"\u2192"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Onboarding;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 16,
    alignSelf: "center",
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    color: colors.textGrey,
    fontWeight: "400",
  },
  disabled: {
    color: "#00000000",
  },
  skipContainer: {
    alignItems: "flex-end",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 40,
  },
  getStartedBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 35,
    justifyContent: "center",
    width: '60%',
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  getStartedText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    marginRight: 8,
  },
  getStartedArrow: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    top: 1,
  },
});
