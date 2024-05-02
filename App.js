import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, Button, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

const colors = ['#F7DC6F', '#A2D9CE', '#5f9dc9']

export default function App() {
  const [setWorking, setSetWorking] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK')
  const [isActive, setIsActive] = useState(false)

  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = (index) => {
    Animated.timing(animation, {
      toValue: index,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const interpolatedColor = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: colors,
  });


  const handleStartStop = () => { 
    setIsActive(!isActive)
   }

  return (
    <SafeAreaView style={[styles.container]}>
      <Animated.View style={[
        styles.container,
        {
          paddingTop: Platform.OS === 'android' && 30,
          backgroundColor: interpolatedColor,
          paddingHorizontal: 15,
        }
      ]}>

        <Text style={styles.text}>Pomodoro</Text>
        <StatusBar style="auto" />
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
          startAnimation={startAnimation}
        />
        <Timer time={time} />

        <TouchableOpacity
          style={styles.button}
          onPress={handleStartStop}
          >
          <Text style={styles.textButton}>{isActive ? 'STOP' : 'START'}</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    marginTop: 15,
    paddingVertical:10,
    borderRadius: 15,
    backgroundColor: '#333'
  }
});
