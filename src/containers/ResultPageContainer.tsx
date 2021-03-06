import { connect } from 'react-redux';
import { List } from 'immutable';

import ResultPage from '../components/pages/ResultPage';

const mapStateToProps = state => {
    console.log(state);
    return {
        currencyCode: state.selectedCurrencyCode,
        inputAmount: state.inputAmount,
        outputAmount: List(state.currencies).filter(
            currency => currency.code === state.selectedCurrencyCode
        ).first().exchangeRate * state.inputAmount
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onHomePress: () => ownProps.navigation.popToTop()
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ResultPage);