import { memo } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import Link from 'components/Link'
import ThemeSwitcher from 'components/ThemeSwitcher'

import Logo from '../Logo'

import { TopBarProps } from '.'

function TopBar({ ...rest }: TopBarProps): JSX.Element {
	return (
		<Flex justify={'space-between'} align={'center'}>
			<Logo />
			<Flex justify={'space-between'} align={'center'} maxWidth={100} w={'100%'}>
				<Box>
					<Link href={'/'}>Home</Link>
				</Box>
				<Box>
					<Link href={'/nfts'}>Nfts</Link>
				</Box>
			</Flex>
			<ThemeSwitcher />
		</Flex>
	)
}

export default memo(TopBar)
