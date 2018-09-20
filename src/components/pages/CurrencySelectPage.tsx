import React from 'react';
import { View, Text, Picker, Button } from 'react-native';
import { List } from 'immutable';

import getEmulator from '../../native-modules/emulatorModule';

export type Currency = {
    name: string,
    code: string,
}

export interface ICurrencySelectPageProps {
    currencies: List<Currency>,
    onChangeCurrency: (newValue: string) => void,
    onProceed: () => void,
}

export interface ICurrencySelectPageState {
    selectedCode: string
}

export default class CurrencySelectPage extends React.PureComponent<ICurrencySelectPageProps, ICurrencySelectPageState> {

    readonly state: ICurrencySelectPageState = {
        selectedCode: this.props.currencies.first().code,
        emulatorText: '',
    }

    componentDidMount() {
        getEmulator()
            .then((emulatorText) => {
                this.setState({
                    emulatorText: emulatorText
                });
            });
    }

    render() {
        return (
            <View>
                <Text>{this.state.emulatorText}</Text>
                <Text>Select currency to convert to</Text>
                <Picker 
                    onValueChange={(newValue) => {
                        this.setState({selectedCode: newValue})
                        this.props.onChangeCurrency(newValue);
                    }}
                    selectedValue={this.state.selectedCode}>
                    {
                        this.props.currencies.map(({_, code}) => (
                            <Picker.Item label={code} value={code} key={code} />
                        ))
                    }
                </Picker>
                <Text>{this.props.currencies
                    .filter(
                        ({_, code}) => code === this.state.selectedCode)
                        .first().name}
                </Text>
                <Button title="next" onPress={this.props.onProceed} />
            </View>
        );
    }
}
