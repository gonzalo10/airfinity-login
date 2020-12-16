import { Box, Icon } from '@chakra-ui/react'

import LogoSvg from '../assets/Logo'
import getStyle from '../helpers/shake-animation'

const LoginCard = ({ children, hasError }) => {
	return (
		<Box css={getStyle(hasError)}>
			<Box
				maxW='ml'
				borderWidth='1px'
				borderRadius='lg'
				boxShadow='md'
				bg='white'
				position='relative'
				p='8'>
				<Icon
					as={LogoSvg}
					w={200}
					h={100}
					position='absolute'
					left='0'
					top={['-100px', '-120px']}
					alt='airfinity home of new science logo'
				/>
				{children}
			</Box>
		</Box>
	)
}

export default LoginCard
