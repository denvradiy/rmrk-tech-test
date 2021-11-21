import { SimpleGrid } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import axios from 'axios'

import ContentContainer from 'components/ContentContainer'
import NftItem from 'components/NftItem'
import { BASE_URL } from 'consts'
import { INft } from 'interfaces'

export default function Home({ nfts, page }: { nfts: INft[]; page: number }) {
	useEffect(() => {
		console.log(nfts)
	}, [])

	return (
		<ContentContainer>
			<SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
				{nfts.map(item => (
					<NftItem key={item.id} name={item.name} />
				))}
			</SimpleGrid>
		</ContentContainer>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params, query: { page = 1 } }) => {
	const start = +page === 1 ? 0 : (+page - 1) * 2
	const nftsRes = await axios.get<INft[]>(`${BASE_URL}/api/nfts?limit=${2}&start=${start}`)
	const nfts = await nftsRes.data

	return {
		props: {
			page: +page,
			nfts,
		},
	}
}
