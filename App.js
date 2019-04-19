import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppContainer} from "./src/application/navigation/Navigator";

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppContainer/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
