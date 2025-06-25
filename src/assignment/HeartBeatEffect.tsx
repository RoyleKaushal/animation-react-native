import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated';

const HeartBeatEffect = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(()=>{
    return{
        transform: [{scale: scale.value}],
    }
  })
  const handleAnimation = () => {
    scale.value = withRepeat(withSpring(1.2), -1, true);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={[{ height: 100, width: 100, backgroundColor: 'red' },animatedStyle]} />
      <Button title="Apply" onPress={handleAnimation} />
    </View>
  );
};

export default HeartBeatEffect;

const styles = StyleSheet.create({});
