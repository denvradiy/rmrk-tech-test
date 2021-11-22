import { FunctionComponent, memo } from 'react'
import { Box, Select, SelectProps } from '@chakra-ui/react'

const SelectCustom: FunctionComponent<SelectProps> = ({ options: SelectOptions }) => {
	return (
		<Select>
			{options.map(i => (
				<option value=''></option>
			))}
		</Select>
	)
}

export default memo(SelectCustom)
