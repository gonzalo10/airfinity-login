import { useState } from 'react'
import { Container, VStack, Flex, Text } from '@chakra-ui/react'

import UsernameInput from './Components/input/username-input'
import PasswordInput from './Components/input/password-input'
import LoginButton from './Components/login-button'
import SuccessState from './Components/success-state'
import LoginCard from './Components/login-card'
import LoginFooter from './Components/login-footer'

import useValidateUser from './hooks/use-validate-user'
import { USERNAME, PASSWORD } from './constants'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [validation, validateUser] = useValidateUser({
		username,
		password
	})

	const { isLoading, hasError, isSuccess } = validation

	const handleInput = (e) => {
		const { value, id } = e.target
		if (id === PASSWORD) setPassword(value)
		if (id === USERNAME) setUsername(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		validateUser({ password, username })
	}

	const handleValidation = () => {
		console.log('run validation')
	}

	return (
		<Container height='100%' centerContent>
			<Flex align='center' justify='center' grow='1' direction='column'>
				<LoginCard hasError={hasError}>
					{isSuccess ? (
						<SuccessState />
					) : (
						<Container centerContent w={[250, 400]}>
							<Text fontSize='xl' width='100%' mb={4}>
								Sign in to your account
							</Text>
							<form
								onSubmit={handleSubmit}
								style={{ width: '100%' }}
								onBlur={handleValidation}>
								<VStack spacing={4} align='stretch'>
									<UsernameInput
										username={username}
										handleUsername={handleInput}
										hasError={hasError}
									/>
									<PasswordInput
										password={password}
										handlePassword={handleInput}
										hasError={hasError}
									/>
								</VStack>
								<LoginButton isLoading={isLoading} />
							</form>
						</Container>
					)}
				</LoginCard>
				<LoginFooter />
			</Flex>
		</Container>
	)
}

export default Login
