import { createAction, handleAction, handleActions } from 'redux-actions';
import defaultState from './default-state';

export const changeCurrency = createAction(
    'CHANGE_CURRENCY',
    (selectedCurrencyCode: string) => selectedCurrencyCode
);

export const changeAmount = createAction(
    'CHANGE_AMOUNT',
    (amount: string) => parseInt(amount)
)

// const reducer = handleAction(
//     changeCurrency,
//     (state, action) => ({
//         ...state,
//         selectedCurrencyCode: action.payload
//     }),
//     defaultState
// )

const reducer = handleActions(
    {
        [changeCurrency]: (state, action) => ({
            ...state,
            selectedCurrencyCode: action.payload
        }),
        [changeAmount]: (state, action) => ({
            ...state,
            inputAmount: action.payload
        })
    },
    defaultState
)

export default reducer;
