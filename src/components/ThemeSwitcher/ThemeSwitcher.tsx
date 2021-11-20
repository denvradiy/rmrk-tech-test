import { memo } from 'react'
import { Button, useColorMode } from '@chakra-ui/react'

import Image from 'components/Image'

function ThemeSwitcher(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Button onClick={toggleColorMode}>
			{colorMode === 'light' ? (
				<Image src={'/images/common/dark-theme-icon.svg'} layout={'fixed'} width={18} height={18} />
			) : (
				<Image
					src={'/images/common/light-theme-icon.svg'}
					layout={'fixed'}
					width={18}
					height={18}
				/>
			)}
		</Button>
	)
}

export default memo(ThemeSwitcher)
