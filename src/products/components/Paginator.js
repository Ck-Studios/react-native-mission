import React, {Component} from "react";
import {connect} from "react-redux";
import styled from "styled-components/native";
import {onPressPage, getProducts} from "../../Actions";

class Paginator extends Component<Props> {

  _onPressPage = (number) => {
    this.props.onPressPage(number);
    this.props.getProducts();
  };

  get _pageNumbers() {
    const pageNumbers = [];
    const {itemLength, displayItemCount} = this.props;

    for(let i = 1; i <= Math.ceil(itemLength / displayItemCount); ++i) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  render() {
    return (
      <PaginatorContainer>
        {
          this._pageNumbers.map((number) => (
            <PageNumber
              key={number.toString()}
              onPress={() => this._onPressPage(number)}
            >
              <Number>{number}</Number>
            </PageNumber>
          ))
        }
      </PaginatorContainer>
    )
  }
}

const Number = styled.Text`
  font-size: 20;
`;

const PaginatorContainer = styled.View`
  flex-direction: row;
  padding-left: 20%;
  padding-right: 20%;
  justify-content: space-around;
`;

const PageNumber = styled.TouchableOpacity`
  
`;

const mapStateToProps = (state) => {
  return {
    currentPage: state.page,
    itemLength: state.itemLength,
    displayItemCount: state.displayItemCount,
  }
};

const mapDispatchToProps = {
  onPressPage,
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps) (Paginator);