import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import { global } from 'styles/global'
import Layout from 'components/Layout'

const theme = extendTheme(global)

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
