import React from "react";
import styled from "styled-components/native";
import {GrayColor, RowView} from "../../common/Theme";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
  title: string,
  score: number,
  image: string,
  price: number,
  available?: boolean;
}

export default function Product({title, score, image, price, available}: Props) {
  const pointRegex = /\B(?=(\d{3})+(?!\d))/g;
  const markPrice = price.toString().replace(pointRegex, ',');
  console.log('이미지', image);
  return (
    <ItemContainer>
      <ImageBox>
        <ProductImage
          source={{uri: image}}
          resizeMode={'cover'}
        />
      </ImageBox>
      <Footer>
        <TextBox>
          <Title size={15} numberOfLines={3} >{title}</Title>
          <Title size={20} style={{paddingTop: 10}}>{markPrice}원</Title>
        </TextBox>
        <CartButton>
          <Icon name={'shopping-basket'} size={35} color={'#787878'}/>
        </CartButton>
      </Footer>
    </ItemContainer>
  )
}

const CartButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-left: 20;
  flex: 2;
`;

const Footer = styled(RowView)`
  flex:3;
  padding-left: 20;
  padding-right: 10;
  justify-content: space-between;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.View`
  flex: 7;
`;

const TextBox = styled.View`
  justify-content: center;
  flex: 8;
`;

const Title = styled.Text`
  font-size: ${({size}) => size ? size : 15};
  font-weight: 500;
  color: ${GrayColor};
`;

const ItemContainer = styled.View`
  position: relative;
  overflow: hidden;
  height: 350;
  border-width: 1;
  border-radius: 10;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 20;
  margin-right: 20;
  border-color: black;
`;