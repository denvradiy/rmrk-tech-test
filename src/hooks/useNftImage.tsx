import axios from 'axios'
import { useEffect, useState } from 'react'

import { IImageProps, INft } from '../interfaces'

export default function useNftImage(item: INft): string[] {
	const [imgUrl, setImgUrl] = useState('')
	const [videoUrl, setVideoUrl] = useState('')

	const getImagePath = async () => {
		const cid = item.metadata.split('ipfs://ipfs/')[1]
		const metadataRes = await axios.get<IImageProps>(`https://rmrk.mypinata.cloud/ipfs/${cid}`)

		if (metadataRes.data.image) {
			setImgUrl(`https://ipfs.io/ipfs/${metadataRes.data.image?.split('ipfs://ipfs/')[1]}`)
		}

		if (metadataRes.data.animation_url) {
			setVideoUrl(
				`https://ipfs.io/ipfs/${metadataRes.data.animation_url?.split('ipfs://ipfs/')[1]}`,
			)
		}
	}

	useEffect(() => {
		getImagePath()
	}, [])

	return [imgUrl, videoUrl]
}
