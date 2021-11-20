import { memo, ReactNode } from 'react'
import { Container } from '@chakra-ui/react'

function ContentContainer({ children, ...rest }: { children: ReactNode }): JSX.Element {
	return (
		<Container maxW={'container.xl'} {...rest}>
			{children}
		</Container>
	)
}

export default memo(ContentContainer)
