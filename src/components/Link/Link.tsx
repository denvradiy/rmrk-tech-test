import { memo } from 'react'
import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

import { LinkProps } from './index'
function Link({ children, locale, href, target, ...rest }: LinkProps): JSX.Element {
	const newTab = target === '_blank'

	return (
		<NextLink locale={locale} href={href} {...rest} passHref>
			<ChakraLink
				target={target}
				rel={newTab ? 'noopener noreferrer' : undefined}
				_focus={{ boxShadow: 'none' }}
			>
				{children}
			</ChakraLink>
		</NextLink>
	)
}
export default memo(Link)
