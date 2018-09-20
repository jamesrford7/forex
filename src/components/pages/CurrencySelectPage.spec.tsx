import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { Text, Picker, Button } from 'react-native';

import { List } from 'immutable';

import CurrencySelectPage, { Currency } from './CurrencySelectPage';

describe('CurrencySelectPage', () => {

    const currencies = List<Currency>([{name: 'US Dollar', id: 'USD'}, {name: 'Japanese Yen', id: 'JPY'}]);
    const onNext = jest.fn();

    const wrapper: ShallowWrapper<CurrencySelectPage> = shallow(<CurrencySelectPage currencies={currencies} onNext={onNext} />);

    describe('Header', () => {
        it('should render a Text header', () => {
            expect(wrapper.find(Text).length).toBe(1);
        });

        it('should render the header with the correct text', () => {
            expect(wrapper
                .find(Text)
                .first()
                .text()).toEqual('Select currency to convert to:');
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
                    expect(item.props().value).toBe(currencies.get(index).id)
                })
        });
    
        it('should correctly change the state on picker value change', () => {
            wrapper
                .find(Picker)
                .first()
                .simulate('valueChange', currencies.last().name);
            
            expect(wrapper.state().selectedValue).toBe(currencies.last());
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
            expect(onNext).toHaveBeenCalled();
        });
    });
})
