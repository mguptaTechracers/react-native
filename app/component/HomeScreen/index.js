/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timer: 100,
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.timer === 1) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    console.log("================= componentWillUnmount ===========")
    console.log("=================  clearInterval ===========")

    clearInterval(this.interval);
    this.setState({ timer: 1 });
  }

  reset() {
    clearInterval(this.interval);
    this.setState({ timer: 100 });
  }

  onPressGoToHomeButton() {
    this.props.navigation.replace('login');
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>You clicked {this.state.count} times</Text>
        <Button style={styles.button}
          onPress={() => {
            this.setState({ count: this.state.count + 1 })
          }}
          title="Press Me"
        />
        <Button style={styles.homeButton}
          title="Go to Login"
          onPress={() => this.onPressGoToHomeButton()}
        />

        <Text> Time remaining {this.state.timer} seconds </Text>
        <Button
          title="Reset Timer "
          onPress={() => this.reset()}
        />

      </View>
    );
  }
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

export default Home;

