import { memo } from 'react'
import { Box } from '@chakra-ui/react'

import { SideBarProps } from '.'

function SideBar({ ...rest }: SideBarProps): JSX.Element {
	return <Box {...rest}>SideBar</Box>
}

export default memo(SideBar)
