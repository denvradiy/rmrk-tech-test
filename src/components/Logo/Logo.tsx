import { memo } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import Image from 'components/Image'

import { LogoProps } from '.'

function Logo({ ...rest }: LogoProps): JSX.Element {
	const { colorMode } = useColorMode()

	return (
		<Box {...rest}>
			{colorMode === 'light' ? (
				<Image src={'/images/common/logo-dark.svg'} layout={'fixed'} width={128} height={64} />
			) : (
				<Image src={'/images/common/logo-light.svg'} layout={'fixed'} width={128} height={64} />
			)}
		</Box>
	)
}

export default memo(Logo)
