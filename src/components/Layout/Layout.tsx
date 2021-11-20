import { memo, ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

import Header from 'components/Header'

function Layout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<Flex direction={'column'} w={'100%'}>
			<Header />
			{children}
		</Flex>
	)
}

export default memo(Layout)
