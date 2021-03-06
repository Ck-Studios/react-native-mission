import React from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";
import Product from "./Product"

export default function ProductList({products}) {
  return(
    <ListContainer
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.coverImage}
          price={item.price}
          score={item.score}
          cartColor={item.cartColor}
          available={item.available}
        />
      )}
    />
  )
}

const ListContainer = styled.FlatList`

`;