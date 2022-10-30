import React, { useCallback } from 'react'
import PhoneInput, { FeatureProps } from 'react-phone-number-input'
import { Props } from 'payload/components/fields/Text'
import { Label, useField } from 'payload/components/forms'
import Error from 'payload/dist/admin/components/forms/Error'

import './PhoneField.scss'

type PhoneFieldProps = Props & {
	path: string
	phoneOptions?: FeatureProps<any>
}

const PhoneField: React.FC<PhoneFieldProps> = ({ path, label, required, validate, phoneOptions }) => {
	const memoizedValidate = useCallback(
		(value: string, options: any) => {
			if (validate) {
				return validate(value, { ...options, required })
			}
			return true
		},
		[validate, required]
	)

	const field = useField<string>({ path, validate: memoizedValidate })
	const { value, showError, setValue, errorMessage } = field

	return (
		<div className={'field-type phone'}>
			<Error showError={showError} message={errorMessage} />
			<Label htmlFor={path} label={label} required={required} />
			<PhoneInput
				className={`phone-field field-type phone ${showError ? 'error' : ''}`}
				value={value}
				onChange={setValue}
				{...phoneOptions}
			/>
		</div>
	)
}

export default PhoneField
