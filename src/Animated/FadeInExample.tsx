import React, { useEffect, useRef } from 'react';
import { View, Button, Animated, StyleSheet } from 'react-native';

const FadeInExample = () => {
  const opacity = useRef(new Animated.Value(0.2)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(()=>{

  },[])



  const fadeIn = () => {
      
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  const moveHorizontally = () => {
    Animated.spring(translateX, {
        toValue: 200,
        friction:3,
        useNativeDriver: true
    }).start()
  }

  const sequenceAnimation = () => {
    Animated.sequence([
      Animated.spring(opacity,{
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(translateX, {
        toValue: 250,
        useNativeDriver: true
      })
    ]).start()
  }

  const parallelAnimation =() => {
    Animated.parallel([
      Animated.spring(opacity,{
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(translateX, {
        toValue: 250,
        useNativeDriver: true
      })
    ]).start()
  }

  const resetAll = () => {
    Animated.spring(translateX,{
        toValue: 200,
        friction:3,
        useNativeDriver: true
    }).reset()
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).reset();
  }
 
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity, transform:[{translateX}] }]} />
      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Move" onPress={moveHorizontally} />
      <Button title="Sequence" onPress={sequenceAnimation} />
      <Button title="Parallel" onPress={parallelAnimation } />
      <Button title="Reset" onPress={resetAll} />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center'
  },
  box: {
    width: 100, height: 100, backgroundColor: 'blue', marginBottom: 20
  }
});

export default FadeInExample;
