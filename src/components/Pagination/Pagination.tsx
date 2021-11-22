import { memo } from 'react'
import { useRouter } from 'next/router'
import { Box, Button } from '@chakra-ui/react'
import ReactPaginate from 'react-paginate'

import { PaginationProps } from '.'

function Pagination({ pageCount, initialPage, lastPage, ...rest }: PaginationProps): JSX.Element {
	const router = useRouter()

	type Url = {
		selected: number
	}

	const paginationHandler = (url: Url) => {
		const currentPath = router.pathname
		const currentQuery = { ...router.query }
		currentQuery.page = url.selected + 1

		router.push({
			pathname: currentPath,
			query: currentQuery,
		})
	}

	return (
		<Box {...rest}>
			<ReactPaginate
				pageRangeDisplayed={2}
				marginPagesDisplayed={1}
				onPageChange={paginationHandler}
				pageCount={pageCount}
				initialPage={initialPage}
				disableInitialCallback
				breakClassName='pagination__break'
				containerClassName='pagination'
				pageClassName='pagination__page'
				pageLinkClassName='pagination__link'
				activeClassName='pagination__page--active'
				previousLinkClassName='pagination__button pagination__button--prev'
				nextLinkClassName='pagination__button pagination__button--next'
				previousLabel={<Button>Previous</Button>}
				nextLabel={<Button>Next</Button>}
			/>
		</Box>
	)
}

export default memo(Pagination)
