import React from 'react';
import { Dimensions, View } from 'react-native';
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

const { height, width } = Dimensions.get('window');

export default function DraggableBox() {
  const translateX = useSharedValue(0);
  const prevTranslateX = useSharedValue(0);

  const translateY = useSharedValue(0);
  const prevTranslateY = useSharedValue(0);

  // ✅ Modern gesture creation
  const panGesture = Gesture.Pan()
    .onStart(data => {
      // Optional: you can capture something on start
    })
    .onUpdate(event => {
      const rawX = prevTranslateX.value + event.translationX;
      const rawY = prevTranslateY.value + event.translationY;
      translateX.value = Math.max(0, Math.min(rawX, (width-100)));
      translateY.value = Math.max(0,Math.min(rawY, (height-100)));
  
    })
    .onEnd(event => {
      // Snap back with animation
      translateX.value = Math.floor(translateX.value/((width-100)/2)) === 0 ? 0: width-100
      prevTranslateX.value = translateX.value;
      prevTranslateY.value = translateY.value;
      // translateX.value = withSpring(0);
      // translateY.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, }}>
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
