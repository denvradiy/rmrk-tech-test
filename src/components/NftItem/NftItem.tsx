import { memo, useState } from 'react'
import { Box } from '@chakra-ui/react'

import Image from 'components/Image'
import Link from 'components/Link'
import { INft } from 'interfaces'
import useNftImage from 'hooks/useNftImage'

function NftItem({ item }: { item: INft }): JSX.Element {
	const [imgUrl, videoUrl, itemRef] = useNftImage(item)

	return (
		<Box
			ref={itemRef}
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			display='flex'
			flexDirection='column'
			justifyContent='space-between'
			minHeight={200}
			_hover={{
				transform: 'scale(1.05)',
			}}
			transitionDuration={'0.25s'}
		>
			{imgUrl && (
				<Image
					src={imgUrl || '/images/common/nft-placeholder.jpeg'}
					width={180}
					height={180}
					objectFit={'cover'}
				/>
			)}
			{videoUrl && (
				<Box position='relative' w='100%' h='100%'>
					<video autoPlay loop muted playsInline style={{ objectFit: 'cover', height: '100%' }}>
						<source src={videoUrl} type={'video/mp4'} />
						Your browser does not support the video tag.
					</video>
				</Box>
			)}
			<Box p='6'>
				<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
					<Link href={`/nfts/${item.id}`}>{item.name}</Link>
				</Box>
				<Box>Item code</Box>
			</Box>
		</Box>
	)
}

export default memo(NftItem)
