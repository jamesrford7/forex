import React from 'react';
import { Text, TextInput, Button } from 'react-native';

import { shallow, ShallowWrapper } from 'enzyme';

import { AmountInputPage } from './AmountInputPage';

describe('AmountInputPage', () => {
    const currencyCode = 'JPY';
    const currencyRate = 120;
    const onCurrencyInputChange = jest.fn();
    const onProceed = jest.fn();

    const wrapper: ShallowWrapper<AmountInputPage> = shallow(
        <AmountInputPage 
            currencyCode={currencyCode}
            currencyRate={currencyRate}
            onCurrencyInputChange={onCurrencyInputChange}
            onProceed={onProceed} />
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
                .text()).toEqual(`Converting to: ${currencyCode}`);
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

    describe('Next Button', () => {
        it('should render a Button', () => {
            expect(wrapper.find(Button).length).toBe(1);
        })

        it('should render the button with the correct label', () => {
            expect(wrapper
                .find(Button)
                .first()
                .props()
                .title).toEqual('next');
        });

        it('should call the button\'s handler function', () => {
            wrapper.find(Button).first().simulate('press');
            expect(onProceed).toHaveBeenCalled();
        });
    });
});
