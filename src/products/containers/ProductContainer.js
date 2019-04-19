import React, {Component} from "react";
import {ScrollView, View, StyleSheet, Text} from "react-native";
import {getProducts} from "../../Actions";
import {connect} from "react-redux";
import styled from "styled-components/native";
import ProductList from "../components/ProductList";
import Paginator from "../components/Paginator";
import {ContentDivider} from "../../common/Theme";

class ProductContainer extends Component<Props> {
  state = {};

  componentDidMount() {
    this.props.getProducts();
  };

  render() {
    const {products} = this.props;

    return (
      <ScrollView
        style={{flex: 1,}}
      >
        <ContentDivider flex={1}>
          <Header>ProductList</Header>
        </ContentDivider>
        <ContentDivider flex={9}>
          <ProductList products={products}/>
        </ContentDivider>
        <Paginator/>
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

const Header = styled.Text`
  font-size: 30;
  font-weight: 700;
`;

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)