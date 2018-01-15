import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MenuItem from './MenuItem';


export default class Breakfast extends Component {
    static navigationOptions = {
        title: 'Breakfast',
      };
    render() {
        return (
                <MenuItem itemName={"Breakfast"}/>
        );
    }
} 


