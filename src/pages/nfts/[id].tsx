import { GetServerSideProps } from 'next'
import axios from 'axios'
import { Box, Flex } from '@chakra-ui/react'

import { INft } from 'interfaces'
import { BASE_URL } from 'consts'
import ContentContainer from 'components/ContentContainer'
import useNftImage from 'hooks/useNftImage'
import Image from 'components/Image'

export default function Nft({ nft }: { nft: INft }) {
	const [imgUrl, videoUrl] = useNftImage(nft)

	return (
		<ContentContainer>
			<Flex justify={'center'} py={10}>
				<Box maxW={400}>
					{imgUrl && (
						<Image
							src={imgUrl || '/images/common/nft-placeholder.jpeg'}
							width={180}
							height={180}
							objectFit={'cover'}
						/>
					)}
					{videoUrl && (
						<video autoPlay loop muted playsInline>
							<source src={videoUrl} type={'video/mp4'} />
							Your browser does not support the video tag.
						</video>
					)}
				</Box>
				<Box>{nft.name}</Box>
			</Flex>
		</ContentContainer>
	)
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
