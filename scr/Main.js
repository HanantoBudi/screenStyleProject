import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class Main extends Component {
    static navigationOptions = {
        headerTitle: 'Main Screen',
    }
    render() {
        return (
            <View>
                <Text>
                    Main Screen
                </Text>
            </View>
        );
    }
}