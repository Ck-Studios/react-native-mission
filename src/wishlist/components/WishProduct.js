import React, {Component} from "react";
import styled from "styled-components/native";
import {connect} from "react-redux";
import {makeToMarkedPrice} from "../../common/Utils";
import {PinkColor} from "../../common/Theme";
import {onPressProduct} from "../../Actions";

type Props = {
  id: string,
  title: string,
  image: string,
  price: number,
  selected: boolean,
  available?: boolean;
}

class WishProduct extends Component<Props>{
  state = {
  };

  _handleProductSelect = (id) => {
    this.props.onPressProduct(id);
  };

  render() {
    const {id, title, image, price, selected, available,} = this.props;
    const markedPrice = makeToMarkedPrice(price);
    return (
      <ItemContainer onPress={() => this._handleProductSelect(id)}>
        <ImageBox>
          <ProductImage resizeMode={'stretch'} source={{uri: image}}/>
        </ImageBox>
        <RadioButton>
          {
            selected &&
              <Mark/>
          }
        </RadioButton>
        <TextBox>
          <ProductTitle numberOfLines={3}>{title}</ProductTitle>
          <PriceTag>{markedPrice}원</PriceTag>
        </TextBox>
      </ItemContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = {
  onPressProduct,
};

export default connect(mapStateToProps, mapDispatchToProps) (WishProduct);

const Mark = styled.View`
  width: 10;
  height: 10;
  border-radius: 5;
  background-color: ${PinkColor};
`;

const RadioButton = styled.View`
  background-color: #ffffff;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 5;
  right: 0;
  width: 20;
  height: 20;
  border-radius: 10;
  border-color: ${PinkColor};
  border-width: 1;
  margin-right: 10;
`;

const TextBox = styled.View`
  justify-content: center;
  flex: 6.5;
  padding-left: 20;
`;

const ImageBox = styled.View`
  flex: 3.5;
  justify-content: center;
  padding-top: 20;
  padding-bottom: 20;
`;

const ItemContainer = styled.TouchableOpacity`
  position: relative;
  flex-direction: row;
  height: 150;
  border-width: 1;
  border-radius: 10;
  padding-left: 10;
  padding-right: 10;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 20;
  margin-right: 20;
  border-color: black;
`;

const ProductTitle = styled.Text`
  font-size: 15;
`;

const PriceTag = styled(ProductTitle)`
  font-size: 17;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10;
`;