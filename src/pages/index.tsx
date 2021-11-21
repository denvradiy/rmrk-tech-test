import { SimpleGrid } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import axios from 'axios'

import ContentContainer from 'components/ContentContainer'
import NftItem from 'components/NftItem'
import { BASE_URL } from 'consts'
import { INft } from 'interfaces'

export default function Home({ nfts, page }: { nfts: INft[]; page: number }) {
	return (
		<ContentContainer>
			<SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
				{nfts.map(item => (
					<NftItem key={item.id} item={item} />
				))}
			</SimpleGrid>
		</ContentContainer>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params, query: { page = 1 } }) => {
	const start = +page === 1 ? 0 : (+page - 1) * 10
	const nftsRes = await axios.get<INft[]>(`${BASE_URL}/api/nfts?limit=${10}&start=${start}`)
	const nfts = await nftsRes.data

	return {
		props: {
			page: +page,
			nfts,
		},
	}
}
