import { NativeModules } from 'react-native';

const getEmulator = () => {
    return NativeModules
        .EmulatorModule
        .getEmulatorStatus()
}

export default getEmulator;
