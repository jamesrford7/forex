import React from 'React';
import { View, Text, StyleSheet } from 'react-native';

import getEmulator from '../../native-modules/emulatorModule';

const withEmulatorWarning = (Page) => {
    return class extends React.Component {
        readonly state = {
            emulatorText: ''
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
                    <Page {...this.props} />
                    <Text style={styles.text}>{this.state.emulatorText}</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    text: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: 'red',
    }
})

export default withEmulatorWarning;
