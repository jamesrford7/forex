import React from 'react';
import { View, Text, Picker, Button, StyleSheet } from 'react-native';
import { List } from 'immutable';

import withEmulatorWarning from '../hoc/withEmulatorWarning';

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

class CurrencySelectPage extends React.PureComponent<ICurrencySelectPageProps, ICurrencySelectPageState> {

    readonly state: ICurrencySelectPageState = {
        selectedCode: this.props.currencies.first().code,
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Convert Pound Sterling to :</Text>
                <View style={styles.picker}>
                <Picker 
                    onValueChange={(newValue) => {
                        this.setState({selectedCode: newValue})
                        this.props.onChangeCurrency(newValue);
                    }}
                    mode="dropdown"
                    selectedValue={this.state.selectedCode}>
                    {
                        this.props.currencies.map(({_, code}) => (
                            <Picker.Item label={code} value={code} key={code} />
                        ))
                    }
                </Picker>
                </View>
                <Text style={styles.friendlyName}>{this.props.currencies
                    .filter(
                        ({_, code}) => code === this.state.selectedCode)
                        .first().name}
                </Text>
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
    picker: {
        paddingVertical: 20
    },
    friendlyName: {
        paddingVertical: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    button: {
        paddingVertical: 10
    }
})

export default withEmulatorWarning(CurrencySelectPage);
