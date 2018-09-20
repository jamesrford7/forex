import React from 'react';
import { View, Text, Picker, Button } from 'react-native';
import { List } from 'immutable';

export type Currency = {
    name: string,
    code: string,
}

export interface ICurrencySelectPageProps {
    currencies: List<Currency>,
    onNext: () => void,
}

export interface ICurrencySelectPageState {
    selectedCode: string
}

export default class CurrencySelectPage extends React.PureComponent<ICurrencySelectPageProps, ICurrencySelectPageState> {

    readonly state: ICurrencySelectPageState = {
        selectedCode: this.props.currencies.first().code
    }

    render() {
        return (
            <View>
                <Text>Select currency to convert to</Text>
                <Picker 
                    onValueChange={(newValue) => {this.setState({selectedCode: newValue})}}
                    selectedValue={this.state.selectedCode}>
                    {
                        this.props.currencies.map(({_, code}) => (
                            <Picker.Item label={code} value={code} />
                        ))
                    }
                </Picker>
                <Text>{this.props.currencies
                    .filter(
                        ({_, code}) => code === this.state.selectedCode)
                        .first().name}
                </Text>
                <Button title="next" onPress={this.props.onNext} />
            </View>
        );
    }
}
