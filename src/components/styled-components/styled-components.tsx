import { memo } from 'react'
import { Box } from '@chakra-ui/react'

import { styled-componentsProps } from '.'

function styled-components({ ...rest }: styled-componentsProps): JSX.Element {
	return <Box {...rest}>styled-components</Box>
}

export default memo(styled-components)
