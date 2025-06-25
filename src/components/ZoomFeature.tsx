import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const ZoomFeature = () => {
  const boxOffsetX = useSharedValue(100);
  const boxOffsetY = useSharedValue(100);

  const [isZoomed, setIsZoomed] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: boxOffsetY.value,
      width: boxOffsetX.value,
    };
  });

  const handleZoom = () => {
    if (isZoomed) {
      boxOffsetX.value = withTiming(100);
      boxOffsetY.value = withTiming(100);
      setIsZoomed(false);
    } else {
      boxOffsetX.value = withSpring(width - 50);
      boxOffsetY.value = withSpring(height - 100);
      setIsZoomed(true);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleZoom}>
        <Animated.View style={[{ backgroundColor: 'blue' }, animatedStyle]} />
      </TouchableOpacity>
    </View>
  );
};

export default ZoomFeature;

const styles = StyleSheet.create({});
