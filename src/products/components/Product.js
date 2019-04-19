import React, {Component} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import styled from "styled-components/native";
import {GrayColor, LightGrayColor, PinkColor, RowView} from "../../common/Theme";
import Icon from "react-native-vector-icons/MaterialIcons";
import {makeToMarkedPrice} from "../../common/Utils";
import {addToCart, removeFromCart} from "../../Actions";

type Props = {
  id: string,
  title: string,
  image: string,
  price: number,
  cartColor: string,
  available?: boolean;
}

class Product extends Component<Props> {
  componentDidMount() {
  }

  _productInWishList = () => {
    const {wishList, id} = this.props;
    return wishList.find((item) => item.id === id);
  };

  _toggleCart = (productId) => {
    const productInWishList = this._productInWishList();
    if (productInWishList) {
      this.props.removeFromCart(productId);
    } else {
      if(this.props.wishList.length >= 3) {
        Alert.alert("최대 3개의 상품만 담을 수 있습니다.");
        return;
      }
      this.props.addToCart(productId);
    }
  };

  render() {
    const {id, title, image, price, cartColor, available} = this.props;
    const markedPrice = makeToMarkedPrice(price);

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
            <ProductTitle size={15} numberOfLines={3}>{title}</ProductTitle>
            <PriceTag size={20}>{markedPrice}원</PriceTag>
          </TextBox>
          <CartButton onPress={() => this._toggleCart(id)}>
            <Icon name={'shopping-basket'} size={35} color={cartColor}/>
          </CartButton>
        </Footer>
      </ItemContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList,
  }
};

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

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

const ProductTitle = styled.Text`
  font-size: ${({size}) => size ? size : 15};
  font-weight: 500;
  color: ${GrayColor};
`;

const PriceTag = styled(ProductTitle)`
  padding-top: 10;
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