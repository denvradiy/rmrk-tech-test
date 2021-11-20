import ImageNext from 'next/image'
import { Box } from '@chakra-ui/react'

import { ImageProps } from './index'

export default function Image({
	preload,
	src,
	loader,
	quality,
	priority,
	loading,
	objectPosition,
	sizes,
	width,
	alt,
	height,
	placeholder,
	blurredSrc,
	unoptimized,
	objectFit = 'contain',
	layout = 'responsive',
	// wrapper props
	asComp,
	...props
}: ImageProps): JSX.Element {
	return (
		<Box as={asComp} {...props} lineHeight={0} position={'relative'} overflow={'hidden'}>
			<ImageNext
				layout={layout}
				src={src}
				lazyBoundary={'600px'}
				loader={loader}
				quality={quality}
				priority={priority}
				loading={loading}
				unoptimized={unoptimized}
				objectFit={objectFit}
				objectPosition={objectPosition}
				sizes={sizes}
				width={width}
				height={height}
				alt={alt}
				placeholder={placeholder}
			/>
		</Box>
	)
}
