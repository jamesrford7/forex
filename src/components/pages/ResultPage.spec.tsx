import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { Text, Button } from 'react-native';

import { ResultPage } from './ResultPage';

describe('ResultPage', () => {
    const currencyCode = 'JPY';
    const inputAmount = 100;
    const outputAmount = 12000;
    const onHomePress = jest.fn();

    const wrapper: ShallowWrapper<ResultPage> = shallow(
        <ResultPage 
            currencyCode={currencyCode}
            inputAmount={inputAmount}
            outputAmount={outputAmount}
            onHomePress={onHomePress} />
    )

    describe('Text Labels', () => {
        it('should render two Text Labels', () => {
            expect(wrapper
                .find(Text)
                .length).toBe(2);
        });

        it('should output the correct text for the GBP information', () => {
            expect(wrapper
                .find(Text)
                .first()
                .text()).toEqual(`${inputAmount} GBP is equal to:`);
        });

        it('should output the correct text for the GBP information', () => {
            expect(wrapper
                .find(Text)
                .last()
                .text()).toEqual(`${outputAmount} ${currencyCode}`);
        });
    });

    describe('Home button', () => {
        it('should render a Button', () => {
            expect(wrapper.find(Button).length).toBe(1);
        })

        it('should render the button with the correct label', () => {
            expect(wrapper
                .find(Button)
                .first()
                .props()
                .title).toEqual('Go home');
        });

        it('should call the button\'s handler function', () => {
            wrapper.find(Button).first().simulate('press');
            expect(onHomePress).toHaveBeenCalled();
        });
    });
});
