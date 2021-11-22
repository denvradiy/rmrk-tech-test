import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

import { LinkProps } from './index'

export default function Link({ children, locale, href, target, ...rest }: LinkProps): JSX.Element {
	const newTab = target === '_blank'

	return (
		<NextLink locale={locale} href={href} {...rest} passHref>
			<ChakraLink target={target} rel={newTab ? 'noopener noreferrer' : undefined}>
				{children}
			</ChakraLink>
		</NextLink>
	)
}
