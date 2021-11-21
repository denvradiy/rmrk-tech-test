import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { API_URL } from 'consts'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		query: { start, limit },
	} = req

	const nfsRes = await axios.get(
		`${API_URL}/api/rmrk1/account/CdA62JpyfEyEASA5XKYJAyYZmdQPqe5X9x8MLnoTWtc9rNn`,
	)
	const nftsData = await nfsRes.data

	const startQ = start ? +start : 0
	const limitQ = limit ? +limit + startQ : nftsData.length

	const filteredNfts = nftsData.slice(startQ, limitQ)

	const readyNfts = limit || start ? filteredNfts : nftsData

	res.status(200).json(readyNfts)
}

export default handler
