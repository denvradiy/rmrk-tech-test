import { memo } from 'react'
import { Box } from '@chakra-ui/react'

import { NftListProps } from '.'

function NftList({ ...rest }: NftListProps): JSX.Element {
	return <Box {...rest}>NftList</Box>
}

export default memo(NftList)
