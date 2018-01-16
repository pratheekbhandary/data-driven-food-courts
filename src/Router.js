import React from 'react';
import { TabNavigator } from 'react-navigation';
import FoodSocial from './components/FoodSocial';
import Menu from './components/Menu';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';

export const Tabs = TabNavigator({
    Menu: { screen: Menu },
    FoodSocial: { screen: FoodSocial}
  });

  export const UnderTabs = TabNavigator({
    Breakfast: { screen: Breakfast },
    Lunch: { screen: Lunch},
    Dinner:{ screen: Dinner},
  }, 
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        labelStyle: {
            color: '#333333'
        },
        tabStyle: {
            backgroundColor: '#f5f5f5'
        }
    },
    animationEnabled: false,
    swipeEnabled: false,
    lazy: false,
});
  