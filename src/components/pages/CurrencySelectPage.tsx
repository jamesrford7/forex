import React from 'react';
import { View, Text, Picker, Button } from 'react-native';
import { List } from 'immutable';

export type Currency = {
    name: string,
    id: string,
}

export interface ICurrencySelectPageProps {
    currencies: List<Currency>,
    onNext: () => void,
}

export interface ICurrencySelectPageState {
    selectedValue: string
}

export default class CurrencySelectPage extends React.PureComponent<ICurrencySelectPageProps, ICurrencySelectPageState> {

    readonly state: ICurrencySelectPageState = {
        selectedValue: this.props.currencies.first().name
    }

    render() {
        return (
            <View>
                <Text>Select currency to convert to</Text>
                <Picker 
                    onValueChange={(newValue) => {this.setState({selectedValue: newValue})}}
                    selectedValue={this.state.selectedValue}>
                    {
                        this.props.currencies.map(({name, id}) => (
                            <Picker.Item label={name} value={id} />
                        ))
                    }
                </Picker>
                <Button title="next" onPress={this.props.onNext} />
            </View>
        );
    }
}
