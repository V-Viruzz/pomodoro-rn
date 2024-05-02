import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Timer({ time }) {
  const formattedTime  = `${Math.floor(time / 60)
  .toString()
  .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`  

  return (
    <View style={styles.constainer}>
      <Text style={styles.time}>
        {formattedTime}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#F2F2F2',
    padding: 15,
  },
  time: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
  }
})