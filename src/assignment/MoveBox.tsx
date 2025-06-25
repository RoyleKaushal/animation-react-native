import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const MoveBox = () => {
  const boxOffsetX = useSharedValue(0);
  const boxOffsetY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: boxOffsetX.value },
        { translateY: boxOffsetY.value },
      ],
    };
  });

  const handleAnimation = () => {
    boxOffsetX.value = withSequence(
      withTiming(200),
      withTiming(-200),
      withTiming(0, {}, () => {
        boxOffsetY.value = withSequence(
          withTiming(400),
          withTiming(-400),
          withTiming(0),
        );
      }),
    );
  };
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Animated.View
        style={[
          { height: 100, width: 100, backgroundColor: 'red' },
          animatedStyle,
        ]}
      />
      <Button title="Apply" onPress={handleAnimation} />
    </View>
  );
};

export default MoveBox;

const styles = StyleSheet.create({});
