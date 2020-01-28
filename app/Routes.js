import HomeScreen from './component/HomeScreen/index';
import DetailScreen from './component/DetailScreen/index';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './component/LoginScreen/index';

const AppNavigator = createStackNavigator(
    {
        home: HomeScreen,
        login: Login,
        detail: DetailScreen,

    },
    {
        initialRouteName: 'home',
        headerMode: 'none',
    },
);

export default createAppContainer(AppNavigator);
