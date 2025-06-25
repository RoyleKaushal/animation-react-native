import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const OtherMethods = () => {
  const offset = useSharedValue(0);
  const opacityValue = useSharedValue(0.2);
  const animatedTransformStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const animatedRotateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${offset.value}deg` }],
    };
  });

  const animatedOpacityStyle = useAnimatedStyle(()=>{
    return{
        opacity: opacityValue.value
    }
  })

  const handleTransformMoveTiming = () => {
    offset.value = withSequence(
        withTiming(offset.value + 100),
        withTiming(offset.value - 100),
        withTiming(offset.value)
    );
  };
  const handleRotateMoveTiming = () => {
    offset.value = withTiming(offset.value + 90, { duration: 1000 });
    // offset.value = withDelay(1000, withTiming(offset.value + 90));
    // offset.value = withRepeat(withTiming(offset.value + 90, { duration: 1000 }), 4, true);
  };
  const handleOpacity = ()=>{
    opacityValue.value = withTiming(1, {duration: 5000})
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          { height: 100, width: 100, backgroundColor: 'red' },
          animatedTransformStyle,
        // animatedRotateStyle
        // animatedOpacityStyle
        ]}
      />
      <Button title="Move" onPress={
        // handleRotateMoveTiming
        handleTransformMoveTiming
        // handleOpacity
        } />
    </View>
  );
};

export default OtherMethods;

const styles = StyleSheet.create({});
