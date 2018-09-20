import React from 'React';
import { View, Text } from 'react-native';

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
                    <Text>{this.state.emulatorText}</Text>
                </View>
            );
        }
    }
}

export default withEmulatorWarning;
