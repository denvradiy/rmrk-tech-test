import { GetServerSideProps } from 'next'
import axios from 'axios'
import { Box, Flex, Heading } from '@chakra-ui/react'

import { INft } from 'interfaces'
import { BASE_URL } from 'consts'
import ContentContainer from 'components/ContentContainer'
import useNftImage from 'hooks/useNftImage'
import Image from 'components/Image'

export default function Nft({ nft }: { nft: INft }) {
	const [imgUrl, videoUrl] = useNftImage(nft)

	return (
		<ContentContainer>
			<Flex justify={'center'} direction={'column'} py={10}>
				<Box maxW={400} w={'100%'}>
					{imgUrl && (
						<Image
							src={imgUrl || '/images/common/nft-placeholder.jpeg'}
							width={400}
							height={400}
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
				<Heading as='h1' size='2xl' my={2}>
					{nft.name}
				</Heading>
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
