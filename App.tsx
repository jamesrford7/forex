import React from 'react';

import CurrencySelectPage, { Currency } from'./src/components/pages/CurrencySelectPage';

import { List } from 'immutable';

const currencies = List<Currency>([{name: 'US Dollar', id: 'USD'}, {name: 'Japanese Yen', id: 'JPY'}]);

const App = () => (
	<CurrencySelectPage currencies={currencies} onNext={() => {}}/>
)

export default App;
