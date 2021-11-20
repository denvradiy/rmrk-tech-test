import { memo } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import TopBar from 'components/TopBar'
import ContentContainer from 'components/ContentContainer'

import { HeaderProps } from '.'

function Header({ ...rest }: HeaderProps): JSX.Element {
	const { colorMode } = useColorMode()
	const bg = colorMode === 'light' ? 'gray.100' : 'gray.700'

	return (
		<Box
			as={'header'}
			position={'absolute'}
			top={0}
			left={0}
			py={2}
			w={'100%'}
			background={bg}
			{...rest}
		>
			<ContentContainer>
				<TopBar />
			</ContentContainer>
		</Box>
	)
}

export default memo(Header)
