import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MenuItem from './MenuItem';


export default class FoodSocial extends Component {
    static navigationOptions = {
        title: 'FOOD SOCIAL',
      };
    render() {
        return (
                <MenuItem itemName={"FoodSocial"}/>
        );
    }
} 


