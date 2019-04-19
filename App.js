import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./src/Reducer";
import {AppContainer} from "./src/application/navigation/Navigator";

const store = createStore(reducer);

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <AppContainer/>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
