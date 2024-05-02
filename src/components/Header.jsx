import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const options = ['Pomodoro', 'Short Break', 'Long Break']
function Header({ currentTime, setCurrentTime, setTime, startAnimation }) {

  const handlePress = (index) => {
    console.log('🚀 ~ handlePress ~ index:', index)
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15
    setCurrentTime(index)
    setTime(newTime * 60)

    startAnimation(index)
  }


  return (
    <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
      {options.map((item, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index)}
          key={index}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: 'transparent' }
          ]}
        >
          <Text style={{ fontWeight: 'bold' }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  itemStyle: {
    width: '33%',
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  }
})

export default Header