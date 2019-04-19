import React from "react";
import styled from "styled-components/native";
import WishProduct from "./WishProduct";

export default function WishList({products}) {
  console.log(products)
  return (
    <ListContainer
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <WishProduct
          id={item.id}
          title={item.title}
          image={item.coverImage}
          price={item.price}
          selected={item.selected}
          available={item.available}
        />
      )}
    />
  )
}

const ListContainer = styled.FlatList`
`;