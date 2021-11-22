import { memo, useMemo, useEffect, useCallback, ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'

import NftItem from 'components/NftItem/NftItem'
import ContentContainer from 'components/ContentContainer/ContentContainer'
import Pagination from 'components/Pagination'
import SelectCustom from 'components/SelectCustom'

import { PaginationWrapper } from './Nfts.styles'

import { NftsProps } from './index'

function Nfts({ nfts, numberOfNfts, page, ...rest }: NftsProps): JSX.Element {
	const [nftsArr, setNftsArr] = useState(nfts)
	const router = useRouter()
	const lastPage = useMemo(() => Math.ceil(numberOfNfts / 20), [numberOfNfts])

	useEffect(() => {
		if (page > lastPage || page < 1) {
			router.push('/404')
		}
	}, [lastPage, page, router])

	const handleSorting = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			if (event.target.value === 'ask') {
				setNftsArr(nfts.sort((a, b) => parseFloat(a.sn) - parseFloat(b.sn)))
			}

			if (event.target.value === 'desc') {
				setNftsArr(nfts.sort((a, b) => parseFloat(b.sn) - parseFloat(a.sn)))
			}
		},
		[nfts],
	)

	return (
		<ContentContainer py={10}>
			<Text fontSize={'xl'} mb={2}>
				Sort by serial number
			</Text>

			<Box mb={10} maxW={300}>
				<SelectCustom placeholder={'Select value'} onChange={handleSorting}>
					<option value='desc'>Desc</option>
					<option value='ask'>Asc</option>
				</SelectCustom>
			</Box>

			<SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mb={10}>
				{nftsArr.map(item => (
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
