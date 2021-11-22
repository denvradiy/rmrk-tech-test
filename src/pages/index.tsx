import { Box, Heading } from '@chakra-ui/react'

import ContentContainer from 'components/ContentContainer'

export default function Home() {
	return (
		<ContentContainer>
			<Box
				h={`calc(100vh - 80px)`}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				p={3}
			>
				<Heading as='h1' size='4xl'>
					Home page
				</Heading>
			</Box>
		</ContentContainer>
	)
}
