import { createStackNavigator } from 'react-navigation';

import CurrencySelectPageContainer from '../containers/CurrencySelectPageContainer';
import AmountInputPageContainer from '../containers/AmountInputPageContainer';
import ResultPageContainer from '../containers/ResultPageContainer';

const Navigation = createStackNavigator(
    {
        CurrencySelect: {
            screen: CurrencySelectPageContainer
        },
        AmountInput: {
            screen: AmountInputPageContainer
        },
        Result: {
            screen: ResultPageContainer
        }
    },
    {
        initialRouteName: 'CurrencySelect'
    }
)

export default Navigation;
