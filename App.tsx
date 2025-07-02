import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { use } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import ZoomFeature from './src/components/ZoomFeature';
import OtherMethods from './src/components/OtherMethods';
import FadeInScaleUp from './src/assignment/FadeInScaleUp';
import MoveBox from './src/assignment/MoveBox';
import HeartBeatEffect from './src/assignment/HeartBeatEffect';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableBox from './src/components/GestureFeature';
import DragList from './src/assignment/DraggableListItem';
import MovableMusic from './src/assignment/MovableMusic';
import FadeInExample from './src/Animated/FadeInExample';
const { width, height } = Dimensions.get('window');

const App = () => {
  return <FadeInExample/>;
};

export default App;

const styles = StyleSheet.create({});
