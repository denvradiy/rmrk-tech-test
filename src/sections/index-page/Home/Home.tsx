import { memo } from 'react'
import { Box, Heading } from '@chakra-ui/react'

import ContentContainer from 'components/ContentContainer/ContentContainer'
import { bodyPaddingTop } from 'styles/global'

function Home(): JSX.Element {
	return (
		<ContentContainer>
			<Box
				h={`calc(100vh - ${bodyPaddingTop}px)`}
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

export default memo(Home)
