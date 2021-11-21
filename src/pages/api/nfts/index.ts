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

		const startQ = start ? +start : 0
		const limitQ = limit ? +limit + startQ : nftsData.length

		const filteredNfts = nftsData.slice(startQ, limitQ)

		const readyNfts = limit || start ? filteredNfts : nftsData

		res.status(200).json(readyNfts)
	} catch (e) {
		res.status(e.statusCode).json({ success: false })
	}
}

export default handler
