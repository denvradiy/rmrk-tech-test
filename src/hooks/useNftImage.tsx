import axios from 'axios'
import { useState } from 'react'
import { useInViewEffect } from 'react-hook-inview'

import { IImageProps, INft } from '../interfaces'

export default function useNftImage(item: INft): (string | ((node: Element | null) => void))[] {
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

	const itemRef = useInViewEffect(
		([entry], observer) => {
			if (entry.isIntersecting) {
				observer.unobserve(entry.target)
				getImagePath()
			}
		},
		{ threshold: 0.5 },
	)

	return [imgUrl, videoUrl, itemRef]
}
