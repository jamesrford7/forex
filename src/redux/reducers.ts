import { createAction, handleAction } from 'redux-actions';
import defaultState from './default-state';

export const changeCurrency = createAction(
    'CHANGE_CURRENCY',
    (selectedCurrencyCode: string) => selectedCurrencyCode
);

const reducer = handleAction(
    changeCurrency,
    (state, action) => ({
        ...state,
        selectedCurrencyCode: action.payload
    }),
    defaultState
)

export default reducer;
