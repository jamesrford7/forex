import React from 'react';

import { Provider } from 'react-redux';
import store from './src/redux/store';

// import CurrencySelectPage, { Currency } from'./src/components/pages/CurrencySelectPage';
import AmountInputPage from './src/components/pages/AmountInputPage';
import ResultPage from './src/components/pages/ResultPage';

import { List } from 'immutable';

// const currencies = List<Currency>([{name: 'US Dollar', code: 'USD'}, {name: 'Japanese Yen', code: 'JPY'}]);

import CurrencySelectPageContainer from './src/containers/CurrencySelectPageContainer';
import AmountInputPageContainer from './src/containers/AmountInputPageContainer';
import ResultPageContainer from './src/containers/ResultPageContainer';

const App = () => (
	// <CurrencySelectPage currencies={currencies} onNext={() => {}}/>
	// <AmountInputPage currencyToConvert="JPY" currencyRate={120} onCurrencyInputChange={() => {}} />
	// <ResultPage gbpAmount={100} currencyToConvert='JPY' destinationCurrencyAmount={12000} onHomePress={() => {}} />
	<Provider store={store}>
		{/* <AmountInputPageContainer /> */}
		{/* <CurrencySelectPageContainer /> */}
		<ResultPageContainer />
	</Provider>
)

export default App;
