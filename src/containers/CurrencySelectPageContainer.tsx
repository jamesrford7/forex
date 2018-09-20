import { connect } from 'react-redux';
import { List } from 'immutable';

import CurrencySelectPage from '../components/pages/CurrencySelectPage';

import { changeCurrency } from '../redux/reducers';

const mapStateToProps = state => {
    console.log(state);
    return {
        currencies: List(state.currencies)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeCurrency: (newValue: string) => {
            dispatch(changeCurrency(newValue))
        },
        onProceed: () => ownProps.navigation.navigate('AmountInput')
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CurrencySelectPage);