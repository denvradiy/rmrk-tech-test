import axios from 'axios'

import { IImageProps, INft } from '../interfaces'

export const getImagePath = async (item: INft) => {
	const cid = item.metadata.split('ipfs://ipfs/')[1]
	const metadataRes = await axios.get<IImageProps>(`https://rmrk.mypinata.cloud/ipfs/${cid}`)

	if (metadataRes.data.image) {
		const imgUrl = `https://ipfs.io/ipfs/${metadataRes.data.image?.split('ipfs://ipfs/')[1]}`
	}

	if (metadataRes.data.animation_url) {
		const videoUrl = `https://ipfs.io/ipfs/${
			metadataRes.data.animation_url?.split('ipfs://ipfs/')[1]
		}`
	}
}
