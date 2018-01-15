import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MenuItem from './MenuItem';
import {UnderTabs} from '../Router'


export default class Menu extends Component {
    static navigationOptions = {
        title: 'MENU',
      };
    render() {
        return (
            <UnderTabs/>
        );
    }
} 


