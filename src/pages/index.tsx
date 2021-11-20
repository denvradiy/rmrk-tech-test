import { SimpleGrid } from '@chakra-ui/react'

import ContentContainer from 'components/ContentContainer'

import NftItem from '../components/NftItem'

export default function Home() {
	return (
		<ContentContainer>
			<SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
				<NftItem />
				<NftItem />
				<NftItem />
				<NftItem />
				<NftItem />
				<NftItem />
			</SimpleGrid>
		</ContentContainer>
	)
}
