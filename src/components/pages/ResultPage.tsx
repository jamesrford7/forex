import React from 'react';
import { View, Text, Button } from 'react-native';

export interface IResultPage {
    currencyToConvert: string,
    gbpAmount: number,
    destinationCurrencyAmount: number,
    onHomePress: () => void;
}

export default class ResultPage extends React.PureComponent<IResultPage> {
    render() {
        return (
            <View>
                <Text>{`${this.props.gbpAmount} GBP is equal to:`}</Text>
                <Text>{`${this.props.destinationCurrencyAmount} ${this.props.currencyToConvert}`}</Text>
                <Button title="Go home" onPress={this.props.onHomePress} />
            </View>
        )
    }
}