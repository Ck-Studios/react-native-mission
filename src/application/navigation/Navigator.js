import {
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation";
import {Dimensions, StyleSheet, Image} from "react-native";
import ProductContainer from "../../products/containers/ProductContainer";
import WishListContainer from "../../wishlist/containers/WishListContainer";

const {width, height} = Dimensions.get('window');
const ICON_SIZE = 25;
const tabBarOptions = {
  showIcon: false,
  showLabel: true,
  style: {
    backgroundColor: '#ffffff',
  },
  indicatorStyle: {
    opacity: 1,
  },
};

export const RootTab = createMaterialTopTabNavigator({
  ProductContainer: {
    screen: ProductContainer
  },

  WishListContainer: {
    screen: WishListContainer
  }
}, {
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions,
});

export const AppNavigator = createStackNavigator({
  RootTab,
}, {
  initialRouteName: 'RootTab',
  headerMode: 'none',
});

export const AppContainer = createAppContainer(AppNavigator);