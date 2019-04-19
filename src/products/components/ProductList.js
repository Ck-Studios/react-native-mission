import React from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";
import Product from "./Product"

function ProductList({products}) {
  return(
    <ListContainer
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Product
          key={item.id}
          title={item.title}
          image={item.coverImage}
          price={item.price}
          score={item.score}
          available={item.available}
        />
      )}
    />
  )
}

const mapStateToProps = (state) => {
  return {
  }
};

export default connect(mapStateToProps) (ProductList)

const ListContainer = styled.FlatList`

`;