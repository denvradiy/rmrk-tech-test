import ImageNext from 'next/image'
import { memo } from 'react'
import { Box } from '@chakra-ui/react'

import { ImageProps } from './index'

function Image({
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
	onLoad,
	onLoadingComplete,
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
				onLoadingComplete={onLoadingComplete}
			/>
		</Box>
	)
}

export default memo(Image)
