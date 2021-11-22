import { memo, FunctionComponent } from 'react'
import { Container, ContainerProps } from '@chakra-ui/react'

const ContentContainer: FunctionComponent<ContainerProps> = ({ children, ...rest }) => {
	return (
		<Container maxW={'container.xl'} {...rest}>
			{children}
		</Container>
	)
}

export default memo(ContentContainer)
