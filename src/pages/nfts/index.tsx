import { GetServerSideProps } from 'next'
import axios from 'axios'

import { BASE_URL } from 'consts'
import { INft } from 'interfaces'
import Nfts from 'sections/nfts-page/Nfts'

export default function Hfts({
	nfts,
	page,
	numberOfNfts,
}: {
	nfts: INft[]
	page: number
	numberOfNfts: number
}) {
	return <Nfts nfts={nfts} page={page} numberOfNfts={numberOfNfts} />
}

export const getServerSideProps: GetServerSideProps = async ({ params, query: { page = 1 } }) => {
	const start = +page === 1 ? 0 : (+page - 1) * 20
	const allNftsRes = await axios.get<INft[]>(`${BASE_URL}/api/nfts`)
	const numberOfNfts = allNftsRes.data.length

	const nftsRes = await axios.get<INft[]>(`${BASE_URL}/api/nfts?limit=${20}&start=${start}`)
	const nfts = await nftsRes.data

	return {
		props: {
			page: +page,
			nfts,
			numberOfNfts,
		},
	}
}
