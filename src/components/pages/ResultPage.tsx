import React from 'react';
import { View, Text, Button } from 'react-native';

export interface IResultPage {
    currencyCode: string,
    inputAmount: number,
    outputAmount: number,
}

export default class ResultPage extends React.PureComponent<IResultPage> {
    render() {
        return (
            <View>
                <Text>{`${this.props.inputAmount} GBP is equal to:`}</Text>
                <Text>{`${this.props.outputAmount} ${this.props.currencyCode}`}</Text>
                <Button title="Go home" onPress={() => {}} />
            </View>
        )
    }
}