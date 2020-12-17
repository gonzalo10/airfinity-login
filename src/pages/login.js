import { useState } from 'react'
import { Container, Flex } from '@chakra-ui/react'

import Form from '../Components/login/form/form'
import LoginCard from '../Components/login/card'
import SignupHelper from '../Components/login/signup-helper'

const Login = () => {
	const [showErrorAnimation, setShowErrorAnimation] = useState(false)

	return (
		<Container height='100%' centerContent>
			<Flex align='center' justify='center' grow='1' direction='column'>
				<LoginCard hasError={showErrorAnimation}>
					<Form setShowErrorAnimation={setShowErrorAnimation} />
				</LoginCard>
				<SignupHelper />
			</Flex>
		</Container>
	)
}

export default Login
