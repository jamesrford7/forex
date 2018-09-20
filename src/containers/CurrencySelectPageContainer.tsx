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

const mapDispatchToProps = dispatch => {
    return {
        onChangeCurrency: (newValue: string) => {
            dispatch(changeCurrency(newValue))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CurrencySelectPage);