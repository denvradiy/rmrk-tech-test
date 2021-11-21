import { memo } from 'react'
import { Box } from '@chakra-ui/react'

import { INft } from 'interfaces'
import useNftImage from 'hooks/useNftImage'

import Image from '../Image'

function NftItem({ item }: { item: INft }): JSX.Element {
	const imgUrl = useNftImage(item)

	return (
		<Box
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			_hover={{
				transform: 'scale(1.05)',
			}}
			transitionDuration={'0.25s'}
		>
			<Image src={imgUrl || '/images/common/nft-placeholder.jpeg'} width={180} height={180} />
			<Box p='6'>
				<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
					{item.name}
				</Box>
				<Box>Item code</Box>
			</Box>
		</Box>
	)
}

export default memo(NftItem)
