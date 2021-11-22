import { memo, useState } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

import Image from 'components/Image'
import Link from 'components/Link'
import { INft } from 'interfaces'
import useNftImage from 'hooks/useNftImage'

function NftItem({ item }: { item: INft }): JSX.Element {
	const [imageLoading, setImageLoading] = useState(true)
	const {
		data: [imgUrl, videoUrl],
		itemRef,
	} = useNftImage(item)

	const loadedImageHandler = () => {
		setImageLoading(false)
	}

	return (
		<Link href={`/nfts/${item.id}`}>
			<Box
				ref={itemRef}
				borderWidth='1px'
				borderRadius='lg'
				overflow='hidden'
				display='flex'
				flexDirection='column'
				justifyContent='space-between'
				h={'100%'}
				_hover={{
					transform: 'scale(1.05)',
				}}
				transitionDuration={'0.25s'}
				position={'relative'}
			>
				{!imgUrl && !videoUrl && (
					<Box position={'relative'} h={'100%'} w={'100%'} paddingBottom={'100%'} />
				)}

				{imageLoading && (
					<Box position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>
						<Spinner />
					</Box>
				)}

				{imgUrl && (
					<Image
						src={imgUrl}
						width={180}
						height={180}
						objectFit={'cover'}
						onLoadingComplete={loadedImageHandler}
					/>
				)}

				{videoUrl && !imgUrl && (
					<Box position='relative' w='100%' h='100%'>
						<video autoPlay loop muted playsInline style={{ objectFit: 'cover', height: '100%' }}>
							<source src={videoUrl} type={'video/mp4'} />
							Your browser does not support the video tag.
						</video>
					</Box>
				)}

				<Box p='6'>
					<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
						{item.name}
					</Box>
					<Box>{item.sn}</Box>
				</Box>
			</Box>
		</Link>
	)
}

export default memo(NftItem)
