import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '@/constants/themes';

type OnboardingItem = {
  image: any;
  title: string;
  description: string;
}

type Props = {
  item: OnboardingItem
}

const OnboardingItems: React.FC<Props> = ({ item }) => {
    const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.Image, {width, resizeMode: 'contain'}]}/>
      <View style={{}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}

export default OnboardingItems

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        justifyContent: 'center',
        marginBottom: 24,
    },
    title: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 54,
    },
    description: {
        color: colors.textGrey,
        fontSize: 16,
        fontWeight: 400,
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 54,
    }
});