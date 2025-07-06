// utils/Responsive.js
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// You can adjust this based on your design's base dimensions
const BASE_WIDTH = 375;   // iPhone 11 Pro
const BASE_HEIGHT = 812;

const scaleWidth = SCREEN_WIDTH / BASE_WIDTH;
const scaleHeight = SCREEN_HEIGHT / BASE_HEIGHT;

// Scale based on width (best for font sizes)
const scale = (size: number) => size * scaleWidth;

// Scale with respect to height (for vertical paddings/margins if needed)
const verticalScale = (size: number) => size * scaleHeight;

// Moderate scale with factor to control the scaling
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

// Optional: Normalize text size using PixelRatio for better consistency
const normalizeText = (size: number) => {
  const newSize = scale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const Responsive = {
  scale,
  verticalScale,
  moderateScale,
  normalizeText,
};
