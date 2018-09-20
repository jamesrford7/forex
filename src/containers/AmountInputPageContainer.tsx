import { connect } from 'react-redux';
import { List } from 'immutable';

import AmountInputPage from '../components/pages/AmountInputPage';

import { changeAmount } from '../redux/reducers';

const mapStateToProps = state => {
    console.log(state);
    return {
        currencyCode: state.selectedCurrencyCode,
        currencyRate: List(state.currencies).filter(
            currency => currency.code === state.selectedCurrencyCode
        ).first().exchangeRate
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCurrencyInputChange: (newValue: string) => {
            dispatch(changeAmount(newValue))
        },
        onProceed: () => ownProps.navigation.navigate('Result')
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AmountInputPage);