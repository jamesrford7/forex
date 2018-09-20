import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import withEmulatorWarning from '../hoc/withEmulatorWarning';

export interface IResultPage {
    currencyCode: string,
    inputAmount: number,
    outputAmount: number,
    onHomePress: () => {},
}

class ResultPage extends React.PureComponent<IResultPage> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{`${this.props.inputAmount} GBP is equal to:`}</Text>
                <Text style={styles.result}>{`${this.props.outputAmount} ${this.props.currencyCode}`}</Text>
                <View style={styles.button}>
                    <Button title="Go home" onPress={this.props.onHomePress} />
                </View>
            </View>
        )
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
    result: {
        fontSize: 15,
        color: 'green',
        paddingVertical: 15,
    },
    button: {
        paddingVertical: 10
    }
})

export default withEmulatorWarning(ResultPage);
