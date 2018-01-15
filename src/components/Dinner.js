import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MenuItem from './MenuItem';


export default class Dinner extends Component {
    static navigationOptions = {
        title: 'Dinner',
      };
    render() {
        return (
                <MenuItem itemName={"Dinner"}/>
        );
    }
} 


