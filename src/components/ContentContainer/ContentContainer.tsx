import { memo } from 'react'
import { Container, ContainerProps } from '@chakra-ui/react'

function ContentContainer({ children, ...rest }: ContainerProps) {
	return (
		<Container maxW={'container.xl'} {...rest}>
			{children}
		</Container>
	)
}

export default memo(ContentContainer)
