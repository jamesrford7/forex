import React from 'react';

import { shallow } from 'enzyme';
import { Text } from 'react-native';

import { List } from 'immutable';

import CurrencySelectPage, { Currency } from './CurrencySelectPage';

describe('CurrencySelectPage', () => {

    const currencies = List<Currency>([{name: 'US Dollar', id: 'USD'}, {name: 'Japanese Yen', id: 'JPY'}]);
    const onNext = jest.fn();

    const wrapper = shallow(<CurrencySelectPage currencies={currencies} onNext={onNext} />);
    it('should be there', () => {
        expect(wrapper.find(Text).length).toBe(2);
    });
})
