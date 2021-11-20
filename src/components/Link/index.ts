import { ReactNode } from 'react'
import { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = {
	target?: string
	children: ReactNode
} & NextLinkProps

export { default } from './Link'
