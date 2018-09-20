import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import withEmulatorWarning from '../hoc/withEmulatorWarning';

export interface IAmountInputProps {
    currencyCode: string;
    currencyRate: number;
    onCurrencyInputChange: (newValue: string) => void;
    onProceed: () => void;
}

export class AmountInputPage extends React.PureComponent<IAmountInputProps> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Converting to: {this.props.currencyCode}</Text>
                <Text style={styles.rate}>Rate: {this.props.currencyRate}</Text>
                <View style={styles.textInput}>
                    <TextInput
                        keyboardType='numeric'
                        onChangeText={this.props.onCurrencyInputChange}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="next" onPress={this.props.onProceed} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 20,
        color: 'black',
        paddingTop: 10,
    },
    rate: {
        fontSize: 15,
        color: 'green',
        paddingVertical: 15,
    },
    textInput: {
        borderColor: 'blue',
        borderWidth: 1,
        paddingVertical: 15,
    },
    button: {
        paddingVertical: 10
    }
})

export default withEmulatorWarning(AmountInputPage);
