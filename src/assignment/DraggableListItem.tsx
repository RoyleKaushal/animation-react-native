import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = 80;
const SPACING = 10;

const items = [0, 1, 2, 3, 4];

export default function DragList() {
  const positions = items.map((_, i) => useSharedValue(i * (ITEM_HEIGHT + SPACING)));

  return (
      <View style={{ flex: 1, padding: 20 }}>
        {items.map((item, index) => (
          <DraggableItem
            key={item}
            index={index}
            label={`Item ${item + 1}`}
            positions={positions}
          />
        ))}
      </View>
  );
}

function DraggableItem({ index, label, positions }: any) {
  const translateY = useSharedValue(positions[index].value);
  const gesture = Gesture.Pan()
    .onStart(() => {
      // No-op for now
    })
    .onUpdate((event) => {
      translateY.value = positions[index].value + event.translationY;

      // Collision detection
      positions.forEach((pos: any, i: any) => {
        if (i === index) return;
        const otherY = pos.value;
        const thisY = translateY.value;

        if (
          thisY > otherY - ITEM_HEIGHT / 2 &&
          thisY < otherY + ITEM_HEIGHT / 2
        ) {
          // Swap positions
          const temp = pos.value;
          pos.value = positions[index].value;
          positions[index].value = temp;
        }
      });
    })
    .onEnd(() => {
      translateY.value = withSpring(positions[index].value);
    });

  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    transform: [{ translateY: translateY.value }],
    zIndex: 100,
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.item]}>
        <Text style={styles.text}>{label}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  item: {
    height: ITEM_HEIGHT,
    marginBottom: SPACING,
    backgroundColor: '#90cdf4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
