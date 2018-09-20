import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export interface IAmountInputProps {
    currencyCode: string;
    currencyRate: number;
    onCurrencyInputChange: (newValue: string) => void;
    onProceed: () => void;
}

export default class AmountInputPage extends React.PureComponent<IAmountInputProps> {

    render() {
        return (
            <View>
                <Text>Converting to: {this.props.currencyCode}</Text>
                <Text>Rate: {this.props.currencyRate}</Text>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={this.props.onCurrencyInputChange}
                />
                <Button title="next" onPress={this.props.onProceed} />
            </View>
        );
    }
}
