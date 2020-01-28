/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  // be careful to never call useNavigation in the press callback. Call hooks directly from the render function!
  // const { navigate } = useNavigation();
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(1);
  let interval = null;
  const navigation = useNavigation();

  useEffect(() => {
    interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);

    // Specify how to clean up after this effect:
    // this will clearInterval when component unmont like in ComponentWillUnmount

    return function cleanup() {
      console.log("================= cleanup ===========")
      console.log("=================  clearInterval ===========")
      clearInterval(interval);
      setTimer(1);
    };
  }, []);

  function reset() {
    clearInterval(interval);
    setTimer(1);
  }

  function onPressGoToHomeButton() {
    navigation.replace('login');
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>You clicked {count} times</Text>
      <Button style={styles.button}
        onPress={() => {
          setCount(count + 1)
        }}
        title="Press Me"
      />
      <Button style={styles.homeButton}
        title="Go to Login"
        onPress={() => onPressGoToHomeButton()}
      />

      <Text> Time remaining {timer} seconds </Text>
      <Button
        title="Reset Timer "
        onPress={() => reset()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 100,
    paddingHorizontal: 24,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  button: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  homeButton: {
    marginTop: 8,
    fontSize: 18,
    alignSelf: "flex-end"
  }
});

export default HomeScreen;

