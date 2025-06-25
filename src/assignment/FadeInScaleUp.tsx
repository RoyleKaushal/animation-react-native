import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const FadeInScaleUp = () => {
  const opacity = useSharedValue(1);
  const angle = useSharedValue(0);
  const boxHeight = useSharedValue(100);
  const boxWidth = useSharedValue(100);
  const [isZoomed, setIsZoomed] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: boxHeight.value,
      width: boxWidth.value,
      opacity: opacity.value,
    };
  });

  const animatedRotateStyle = useAnimatedStyle(() => {
    return {
      height: boxHeight.value,
      width: boxWidth.value,
      transform: [{ rotateZ: `${angle.value}deg` }],
    };
  });

  const handleZoomIn = () => {
    setIsZoomed(true);
    (opacity.value = withTiming(1)),
      (boxHeight.value = withTiming(boxHeight.value + 200)),
      (boxWidth.value = withTiming(boxWidth.value + 200));
  };
  const handleZoomOut = () => {
    setIsZoomed(false);
    (opacity.value = withTiming(0.1)),
      (boxHeight.value = withTiming(100)),
      (boxWidth.value = withTiming(100));
  };

  const rotateBox = () => {
    setIsZoomed(true);
    (angle.value = withTiming(360)),
      (boxHeight.value = withTiming(boxHeight.value + 200)),
      (boxWidth.value = withTiming(boxWidth.value + 200));
  };
  const rotateBackBox = () => {
    setIsZoomed(false);
    (angle.value = withTiming(0)),
      (boxHeight.value = withTiming(100)),
      (boxWidth.value = withTiming(100));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={[{ backgroundColor: 'red' }, animatedRotateStyle]}
      />
      <Button
        title="Fade In"
        onPress={
          isZoomed
            ? //  handleZoomOut
              rotateBackBox
            : rotateBox
          //  handleZoomIn
        }
      />
    </View>
  );
};

export default FadeInScaleUp;

const styles = StyleSheet.create({});
