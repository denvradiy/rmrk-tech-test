import { CSSProperties } from 'react'
import { ImageProps as ImageNextProps } from 'next/image'

export type ImageProps = {
	style?: CSSProperties | any
	asComp?: any
	blurredSrc?: string
	layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined
	preload?: boolean
} & ImageNextProps

export { default } from './Image'
