import React from 'react';
import { View, Text, TextInput } from 'react-native';

export interface IAmountInputProps {
    currencyToConvert: string;
    currencyRate: number;
    onCurrencyInputChange: (newValue: string) => void;
}

export default class AmountInputPage extends React.PureComponent<IAmountInputProps> {

    render() {
        return (
            <View>
                <Text>Converting to: {this.props.currencyToConvert}</Text>
                <Text>Rate: {this.props.currencyRate}</Text>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={this.props.onCurrencyInputChange}
                />
            </View>
        );
    }
}
