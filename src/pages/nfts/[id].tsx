import { GetServerSideProps } from 'next'
import axios from 'axios'

import { INft } from 'interfaces'
import { BASE_URL } from 'consts'

export default function Nft({ nft }: { nft: INft }) {
	return <div>{nft.name}</div>
}

export const getServerSideProps: GetServerSideProps = async ({ params, query: { id } }) => {
	const nftRes = await axios.get<INft[]>(`${BASE_URL}/api/nfts?id=${id}`)
	const nft = nftRes.data[0]

	return {
		props: {
			nft,
		},
	}
}
