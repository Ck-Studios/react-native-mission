import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation";
import Icon from "react-native-vector-icons/AntDesign";
import {Dimensions, StyleSheet, Image} from "react-native";
import ProductContainer from "../../products/containers/ProductContainer";
import WishListContainer from "../../wishlist/containers/WishListContainer";

const {width, height} = Dimensions.get('window');
const ICON_SIZE = 25;
// const tabBarOptions = {
//   showIcon: true,
//   showLabel: false,
//   style: {
//     color: '#000000',
//     backgroundColor: '#ffffff',
//   },
//   indicatorStyle: {
//     opacity: 0,
//   },
// };

export const RootTab = createMaterialTopTabNavigator({
  ProductContainer: {
    screen: ProductContainer,
    navigationOptions: {
      tabBarIcon: ({focused}) => (
        focused ?
          <Icon name={'profile'} size={ICON_SIZE} color={'#ff24b2'}/>
          :
          <Icon name={'profile'} size={ICON_SIZE} color={'#787878'}/>
      )
    }
  },

  WishListContainer: {
    screen: WishListContainer,
    navigationOptions: {
      tabBarIcon: ({focused}) => (
        focused ?
          <Icon name={'shoppingcart'} size={ICON_SIZE} color={'#ff24b2'}/>
          :
          <Icon name={'shoppingcart'} size={ICON_SIZE} color={'#787878'}/>
      )
    }
  }
}, {
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#ffffff',
    },
    indicatorStyle: {
      opacity: 0,
    },
  },
});

export const AppNavigator = createStackNavigator({
  RootTab,
}, {
  initialRouteName: 'RootTab',
  headerMode: 'none',
});

export const AppContainer = createAppContainer(AppNavigator);