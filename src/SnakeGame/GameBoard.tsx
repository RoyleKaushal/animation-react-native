import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { Responsive } from '../utility/Responsive';
import COLORS from '../constants/Color';
import HorizontalContainer from './component/HorizontalContainer';

const GameBoard = () => {
  const data = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ];
  const MemoizedContainer = React.memo((props: any) => (
    <HorizontalContainer {...props} data={props?.item} />
  ));
  const renderItem = useCallback(
    (props: any) => <MemoizedContainer {...props} />,
    [],
  );
  return (
    <View style={styles.gameBoundary}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
  gameBoundary: {
    borderWidth: Responsive.scale(5),
    height: Responsive.scale(350),
    width: Responsive.scale(350),
    borderRadius: Responsive.scale(12),
    borderColor: COLORS.PALE,
  },
});
