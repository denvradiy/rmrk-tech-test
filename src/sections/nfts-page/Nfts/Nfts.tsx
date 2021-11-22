import { memo, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, SimpleGrid } from '@chakra-ui/react'

import NftItem from 'components/NftItem/NftItem'
import ContentContainer from 'components/ContentContainer/ContentContainer'
import Pagination from 'components/Pagination'

import { PaginationWrapper } from './Nfts.styles'

import { NftsProps } from './index'

function Nfts({ nfts, numberOfNfts, page, ...rest }: NftsProps): JSX.Element {
	const router = useRouter()
	const lastPage = useMemo(() => Math.ceil(numberOfNfts / 20), [numberOfNfts])

	useEffect(() => {
		if (page > lastPage) {
			router.push('/404')
		}
	}, [lastPage, page, router])

	return (
		<ContentContainer py={10}>
			<SimpleGrid columns={[1, 2, 3, 4]} spacing={6} pb={10}>
				{nfts.map(item => (
					<NftItem key={item.id} item={item} />
				))}
			</SimpleGrid>
			<PaginationWrapper>
				<Pagination pageCount={lastPage} initialPage={page - 1} lastPage={lastPage} />
			</PaginationWrapper>
		</ContentContainer>
	)
}

export default memo(Nfts)
