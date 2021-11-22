import { FunctionComponent, memo } from 'react'
import { Select, SelectProps } from '@chakra-ui/react'

const SelectCustom: FunctionComponent<SelectProps> = ({ children, onChange, placeholder }) => {
	return (
		<Select placeholder={placeholder} onChange={onChange}>
			{children}
		</Select>
	)
}

export default memo(SelectCustom)
