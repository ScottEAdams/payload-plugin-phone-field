# payload-plugin-phone-field

Uses [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input) to add phone number fields to [PayloadCMS](https://payloadcms.com/).

## Installation

```
yarn add payload-plugin-phone-field
```
or
```
npm i payload-plugin-phone-field
```

## Usage

Really straightforward implementation:

```js
import { phoneField } from 'payload-plugin-phone-field'

fields: [
    phoneField(
        {
            name: 'phone', // required
        }
    )
]
```

But you can also add any options that TextField accepts and any options that [PhoneNumberInput](https://catamphetamine.gitlab.io/react-phone-number-input/docs/index.html) accepts.

For example, add a label, required and validation plus only show 6 countries to choose from:
```js
fields: [
	phoneField(
		{
			name: 'phone', // required
			label: 'Contact Phone Number',
			required: true,
			validate: phoneIsValid
		},
		{ countries: ['DK', 'FI', 'NO', 'SE', 'GB', 'US'] }
	)
]
```

You can use your own validation function or one of the two included. You can read the rationale from [Nikolay Kuchumov](https://gitlab.com/catamphetamine/libphonenumber-js#using-phone-number-validation-feature).

```js
import { phoneIsValid, phoneIsPossible } from 'payload-plugin-phone-field'
```
