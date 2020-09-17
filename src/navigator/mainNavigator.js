import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4102898Navigator from '../features/BlankScreen4102898/navigator';
import Messaging102897Navigator from '../features/Messaging102897/navigator';
import CalendarView102896Navigator from '../features/CalendarView102896/navigator';
import EmailAuth102895Navigator from '../features/EmailAuth102895/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4102898: { screen: BlankScreen4102898Navigator },
Messaging102897: { screen: Messaging102897Navigator },
CalendarView102896: { screen: CalendarView102896Navigator },
EmailAuth102895: { screen: EmailAuth102895Navigator },

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
