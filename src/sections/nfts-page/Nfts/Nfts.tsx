import {memo, useMemo, useEffect, useCallback, ChangeEventHandler} from 'react'
import { useRouter } from 'next/router'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'

import NftItem from 'components/NftItem/NftItem'
import ContentContainer from 'components/ContentContainer/ContentContainer'
import Pagination from 'components/Pagination'
import SelectCustom from 'components/SelectCustom'

import { PaginationWrapper } from './Nfts.styles'

import { NftsProps } from './index'

function Nfts({ nfts, numberOfNfts, page, ...rest }: NftsProps): JSX.Element {
	const router = useRouter()
	const lastPage = useMemo(() => Math.ceil(numberOfNfts / 20), [numberOfNfts])

	useEffect(() => {
		if (page > lastPage || page < 1) {
			router.push('/404')
		}
	}, [lastPage, page, router])

	const handleSorting = useCallback((event: ChangeEvent<HTMLSelectElement>) => console.log(e), [])

	return (
		<ContentContainer py={10}>
			<Text fontSize={'xl'} mb={2}>
				Sort by serial number
			</Text>
			<SelectCustom />
			<Box mb={10}>
				<SelectCustom placeholder={'Select value'} onChange={handleSorting}>
					<option value='desc'>Desc</option>
					<option value='ask'>Ask</option>
				</SelectCustom>
			</Box>
			<SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mb={10}>
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
