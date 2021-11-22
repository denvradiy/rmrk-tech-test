import styled from 'styled-components'

export const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;

	& .pagination {
		display: flex;
		align-items: center;
		list-style: none;

		&__link {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			outline: none;
		}

		&__page {
			margin: 0 5px;
			width: 41px;
			height: 41px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			cursor: pointer;

			&--active {
			}
		}
	}
`
