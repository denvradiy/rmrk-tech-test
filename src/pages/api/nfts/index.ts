import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { API_URL } from 'consts'
import { INft } from 'interfaces'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		query: { start, limit },
	} = req

	try {
		const nftsRes = await axios.get<INft[]>(
			`${API_URL}/api/rmrk1/account/CdA62JpyfEyEASA5XKYJAyYZmdQPqe5X9x8MLnoTWtc9rNn`,
		)

		const nftsData = nftsRes.data

		const nftsDataWithImages = await Promise.all(
			nftsData.map(async item => {
				const cid = item.metadata.split('ipfs://ipfs/')[1]
				const metadataRes = await axios.get(`https://rmrk.mypinata.cloud/ipfs/${cid}`)
				item.imageProps = metadataRes.data
				return item
			}),
		)

		const startQ = start ? +start : 0
		const limitQ = limit ? +limit + startQ : nftsDataWithImages.length

		const filteredNfts = nftsDataWithImages.slice(startQ, limitQ)

		const readyNfts = limit || start ? filteredNfts : nftsDataWithImages

		res.status(200).json(readyNfts)
	} catch (e) {
		res.status(e.statusCode).json({ success: false })
	}
}

export default handler