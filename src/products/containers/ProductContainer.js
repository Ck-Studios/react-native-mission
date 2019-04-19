import React, {Component} from "react";
import {ScrollView, View, StyleSheet, Text} from "react-native";
import {getProducts} from "../../Actions";
import {connect} from "react-redux";
import styled from "styled-components/native";
import ProductList from "../components/ProductList";
import Paginator from "../components/Paginator";

class ProductContainer extends Component<Props> {
  state = {};

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const {products} = this.props;
    return (
      <ScrollView
        style={{flex: 1,}}
        contentContainerStyle={{flex: 1,}}
      >
        <Text>ProductContainer</Text>
        <ContentDivider flex={9}>
          <ProductList products={products}/>
        </ContentDivider>
        <ContentDivider flex={1} style={{justifyContent: 'flex-end', backgroundColor: 'green'}}>
          <Paginator/>
        </ContentDivider>
      </ScrollView>
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

const ContentDivider = styled.View`
  flex: ${({flex}) => flex ? flex : 1};
`;

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)