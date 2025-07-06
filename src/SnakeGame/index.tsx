import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GameBoard from './GameBoard'

const GameArena = () => {
  return (
    <View style={[styles.mainContainer]}>
      <GameBoard/>
    </View>
  )
}

export default GameArena

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})