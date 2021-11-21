import { memo } from 'react'
import { Box } from '@chakra-ui/react'

import Image from '../Image'

import { NftItemProps } from '.'

function NftItem({ name }: NftItemProps): JSX.Element {
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
			<Image src={'/images/common/nft-placeholder.jpeg'} width={180} height={180} />
			<Box p='6'>
				<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
					{name}
				</Box>
				<Box>Item code</Box>
			</Box>
		</Box>
	)
}

export default memo(NftItem)
