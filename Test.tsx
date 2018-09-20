import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface ITestProps {
    name: string
}

const Test = ({ name }: ITestProps) => (
    <View style={styles.view}>
        <Text>{name}</Text>
    </View>
)

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    }
})

export default Test;