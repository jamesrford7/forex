import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { Text, Picker, Button } from 'react-native';

import { List } from 'immutable';

import { CurrencySelectPage, Currency } from './CurrencySelectPage';

describe('CurrencySelectPage', () => {

    const currencies = List<Currency>([
        {name: 'US Dollar', code: 'USD'}, 
        {name: 'Japanese Yen', code: 'JPY'}
    ]);

    const onChangeCurrency = jest.fn();
    const onProceed = jest.fn();

    const wrapper: ShallowWrapper<CurrencySelectPage> = shallow(
        <CurrencySelectPage
            currencies={currencies}
            onChangeCurrency={onChangeCurrency}
            onProceed={onProceed} 
        />);

    describe('Text Labels', () => {
        describe('Header', () => {
            it('should render the header with the correct text', () => {
                expect(wrapper
                    .find(Text)
                    .first()
                    .text()).toEqual('Convert Pound Sterling to :');
            });
        });

        describe('Friendly currency label', () => {
            it('should render a friendly currency name with the first in the list by default', () => {
                expect(wrapper
                    .find(Text)
                    .first()
                    .text()).toEqual(currencies.first().name);
            });
        });
    });

    describe('Currency Picker', () => {
        it('should render a Picker', () => {
            expect(wrapper.find(Picker).length).toBe(1);
        });
    
        it('should have selected the first currency in the list as the Picker\'s initial value', () => {
            expect(wrapper
                .find(Picker)
                .first()
                .props()
                .selectedValue).toEqual(currencies.first());
        });

        it('should render two Picker.Items', () => {
            expect(wrapper
                .find(Picker.Item)
                .length).toEqual(2);
        });
    
        it('should correctly map the currency values to the Picker.Items', () => {
            wrapper
                .find(Picker.Item)
                .forEach((item, index) => {
                    expect(item.props().label).toBe(currencies.get(index).name)
                    expect(item.props().value).toBe(currencies.get(index).code)
                })
        });
    
        describe('Picker changes', () => {
            wrapper
                .find(Picker)
                .first()
                .simulate('valueChange', currencies.last().code);

            it('should correctly change the state on picker value change', () => {
                expect(wrapper.state().selectedCode).toBe(currencies.last().code);
            });

            it('should call the currency change handler', () => {
                expect(onChangeCurrency).toHaveBeenCalledWith(currencies.last().code)
            })

            it('should update the friendly name Text element', () => {
                expect(wrapper
                    .find(Text)
                    .last()
                    .text()).toEqual(currencies.last().name);
            });
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
})
