import React from 'react';
import { Text, TextInput } from 'react-native';

import { shallow, ShallowWrapper } from 'enzyme';

import AmountInputPage from './AmountInputPage';

describe('AmountInputPage', () => {
    const currencyToConvert = 'JPY';
    const currencyRate = 120;
    const onCurrencyInputChange = jest.fn();

    const wrapper: ShallowWrapper<AmountInputPage> = shallow(
        <AmountInputPage 
            currencyToConvert={currencyToConvert}
            currencyRate={currencyRate}
            onCurrencyInputChange={onCurrencyInputChange} />
    )

    describe('Text labels', () => {
        it('should render two Text labels', () => {
            expect(wrapper
                .find(Text)
                .length).toBe(2);
        })

        it('should render the correct label for the destination currency', () => {
            expect(wrapper
                .find(Text)
                .first()
                .text()).toEqual(`Converting to: ${currencyToConvert}`);
        })

        it('should render the correct label for the destination current exchange rate', () => {
            expect(wrapper
                .find(Text)
                .last()
                .text()).toEqual(`Rate: ${currencyRate}`);
        });
    });

    describe('Text Input', () => {
        it('should render a TextInput element', () => {
            expect(wrapper
                .find(TextInput)
                .length).toBe(1);
        });

        it('should be a numeric text input', () => {
            expect(wrapper
                .find(TextInput)
                .first()
                .props()
                .keyboardType).toEqual('numeric');
        });

        it('should call the on change event handler when user inputs a value', () => {
            wrapper
                .find(TextInput)
                .first()
                .simulate('changeText', '123');

            expect(onCurrencyInputChange).toHaveBeenCalledWith('123');
        });
    });
});
