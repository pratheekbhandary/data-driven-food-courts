import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';
class MenuItem extends Component {

    render() {

        return (
                <View>
                    <Card>
                        <CardSection>
                            <Text style={styles.titleStyle}>
                                {this.props.itemName}
                            </Text>
                        </CardSection>
                    </Card>
                </View>
        );
    }
} 

const styles = {
    titleStyle: {
        fontSize: 30,
        paddingLeft: 15
    }
};

export default MenuItem;
