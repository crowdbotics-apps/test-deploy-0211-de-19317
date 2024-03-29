import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
import SocialLogin from '../features/SocialLogin-Frontend117458/';
//@BlueprintImportInsertion
import BlankScreen117459Navigator from '../features/BlankScreen117459/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SocialLogin: { screen: SocialLogin.navigator },
    //@BlueprintNavigationInsertion
BlankScreen117459: { screen: BlankScreen117459Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
