import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native";
import styled from "styled-components/native";

export default class ProductContainer extends Component<Props> {
  state = {};

  render() {
    return(
      <View style={{flex: 1,}}>
        <Text>ProductContainer</Text>
      </View>
    )
  }
}