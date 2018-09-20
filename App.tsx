import React from 'react';

import CurrencySelectPage, { Currency } from'./src/components/pages/CurrencySelectPage';
import AmountInputPage from './src/components/pages/AmountInputPage';
import ResultPage from './src/components/pages/ResultPage';

import { List } from 'immutable';

const currencies = List<Currency>([{name: 'US Dollar', code: 'USD'}, {name: 'Japanese Yen', code: 'JPY'}]);

const App = () => (
	<CurrencySelectPage currencies={currencies} onNext={() => {}}/>
	// <AmountInputPage currencyToConvert="JPY" currencyRate={120} onCurrencyInputChange={() => {}} />
	// <ResultPage gbpAmount={100} currencyToConvert='JPY' destinationCurrencyAmount={12000} onHomePress={() => {}} />
)

export default App;
