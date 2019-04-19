import React from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";
import Product from "./Product"

function ProductList({products}) {
  return(
    <ListContainer>
      {
        products.map((product, index) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.coverImage}
            price={product.price}
            score={product.score}
            available={product.available}
          />
        ))
      }
    </ListContainer>
  )
}

const mapStateToProps = (state) => {
  return {
  }
};

export default connect(mapStateToProps) (ProductList)

const ListContainer = styled.View`

`;