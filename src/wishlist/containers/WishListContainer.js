import React, {Component} from "react";
import {View, ScrollView, StyleSheet, Text} from "react-native";
import {connect} from "react-redux";
import WishList from "../components/WishList";
import {ContentDivider} from "../../common/Theme";

class WishListContainer extends Component<Props> {
  state = {};

  render() {
    const {wishList} = this.props;
    return (
      <ScrollView style={{flex: 1,}}>
        <ContentDivider flex={1}>
          <Text>WishListContainer</Text>
        </ContentDivider>
        <ContentDivider flex={9}>
          <WishList products={wishList}/>
        </ContentDivider>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList,
  }
};

export default connect(mapStateToProps)(WishListContainer)