import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Responsive } from '../../utility/Responsive';
import COLORS from '../../constants/Color';

const HorizontalContainer = ({ data, index }: any) => {
  console.log(index);
  return (
    <View style={styles.horizontalContainer}>
      {data.map((_: any, idx: number) => (
        <View
          style={[
            styles.smallBoxStyle,
            idx === 0 && styles.firstBox,
            idx === 9 && styles.lastBox,
            index === 9 && { borderBottomWidth: 0 },
          ]}
        />
      ))}
    </View>
  );
};

export default HorizontalContainer;

const styles = StyleSheet.create({
  smallBoxStyle: {
    borderRightWidth: Responsive.scale(1),
    height: Responsive.scale(34),
    width: Responsive.scale(34),
    borderColor: COLORS.MOSQUE_COLOR,
    borderBottomWidth: Responsive.scale(1),
    opacity: 0.4,
  },
  firstBox: {
    borderTopStartRadius: Responsive.scale(8),
  },
  lastBox: {
    borderTopEndRadius: Responsive.scale(8),
    borderRightWidth: 0,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
});
