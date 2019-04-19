import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native";
import ProductList from "../components/ProductList";
import {getProducts} from "../../Actions";
import {connect} from "react-redux";
import styled from "styled-components/native";

class ProductContainer extends Component<Props> {
  state = {};

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const {products} = this.props;
    return(
      <View style={{flex: 1,}}>
        <Text>ProductContainer</Text>
        <ProductList products={products}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productList,
  }
};

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps) (ProductContainer)