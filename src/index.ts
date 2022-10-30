import { FeatureProps, isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'
import { TextField, Validate } from 'payload/types'

import PhoneField from './PhoneField'
import { ValidateOptions } from 'payload/dist/fields/config/types'

export const phoneIsPossible: Validate<any, any, TextField> = (value: string, options: ValidateOptions<any, any, any>) => {
	if (options?.required && !value) {
		return 'This field is required.'
	}
	if (value && !isPossiblePhoneNumber(value)) {
		return 'Please enter a valid phone number.'
	}

	return true
}

export const phoneIsValid: Validate<any, any, TextField> = (value: string, options: ValidateOptions<any, any, any>) => {
	if (options?.required && !value) {
		return 'This field is required.'
	}
	if (value && !isValidPhoneNumber(value)) {
		return 'Please enter a valid phone number.'
	}

	return true
}

export const phoneField = function(
	options: Omit<TextField, 'type'>,
	phoneOptions?: FeatureProps<any>
): TextField {
	return {
		type: 'text',
		admin: {
			components: {
				Field: (props) => {
					return PhoneField({
						...props,
						inputProps: { ...phoneOptions }
					})
				}
			}
		},
		...options
	}
}
