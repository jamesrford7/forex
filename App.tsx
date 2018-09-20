import React from 'react';

import CurrencySelectPage, { Currency } from'./src/components/pages/CurrencySelectPage';
import AmountInputPage from './src/components/pages/AmountInputPage';

import { List } from 'immutable';

const currencies = List<Currency>([{name: 'US Dollar', id: 'USD'}, {name: 'Japanese Yen', id: 'JPY'}]);

const App = () => (
	// <CurrencySelectPage currencies={currencies} onNext={() => {}}/>
	<AmountInputPage currencyToConvert="JPY" currencyRate={120} onCurrencyInputChange={() => {}} />
)

export default App;
