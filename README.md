# FOREX APP

A simple 3 page app that converts GBP to various currencies made available in a redux store

## Requirements

* Node 8.0+
* React Native / React Native CLI
* Android Studio, together with AVD provisioned with API 23+
* xCode with command line tools

## Setup

* Run `npm install` or `yarn` to gather all the dependencie
* For iOS run `react-native run-ios`
* For Android run `react-native run-ios`

## Explanation

The app consists of three screens:

* Currency Select -> User selects via a picker component the currency they wish to convert Pound Sterling to. This list is expandable via the store's defaultState. The selected currency is set in the store and a friendly currency name is displayed which maps to the ISO code.

* Amount Input -> User is able to summon a numeric keyboard to input the GBP value to convert. This is stored in the Redux store. Store data is used on this screen to inform of that currency's current conversion rate as well as reminding them of the selected currency.

* Result page -> The input value from the store is multiplied by the exchange rate and presented to the user. They are offered a home button to start again.

* There is a higher order component that decorates all pages with the emulator status box, the data of which is retrieved over the bridge.

## Libraries Used

* react-navigation -> used for inter-view navigation
* redux-actions -> cuts down on the redux boilerplate
* immutable -> best to use immutable structures for PureComponents to ensure componentShouldUpdate behaves correctly. For example an addition to the currencies array would not trigger a component update if an external API were to merely push to an array

## Caveats

* Jest bailed out on me big-time with the enzyme adapter (suspect version issues) and so I could only write tests to demonstrate my way of testing, but the spec files will not run. I've also run out of time to test the other parts of the system, if only I'd had another day!