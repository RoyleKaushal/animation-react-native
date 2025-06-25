import React from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

export default function DraggableBox() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // ✅ Modern gesture creation
  const panGesture = Gesture.Pan()
    .onStart((data) => {
        console.log('Finger down', data);
      // Optional: you can capture something on start
    })
    .onUpdate((event) => {
      console.log('Finger have', event);
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      // Snap back with animation
      console.log('Finger Up', event);
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                backgroundColor: 'skyblue',
                borderRadius: 20,
              },
              animatedStyle,
            ]}
          />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}
