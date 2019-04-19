import React from "react";
import {Text} from "react-native";
import styled from "styled-components/native";
import {ItemTitleSize} from "../../common/Theme";
import {GrayColor} from "../../common/Theme";

type Props = {
  title: string,
  score: number,
  image: string,
  price: number,
  available?: boolean;
}

export default function Product({title, score, image, price, available}: Props) {
  return (
    <ItemContainer>
      <Title>{title}</Title>
      <Title>중요도{score}</Title>
      <Title>{price}</Title>
    </ItemContainer>
  )
}

const Title = styled.Text`
  font-size: ${ItemTitleSize};
  color: ${GrayColor}
  
`;

const ItemContainer = styled.View`
  padding-left: 5;
  padding-right: 5;
  padding-top: 15;
  padding-bottom: 15;
  border-width: 2;
  border-color: black;
`;