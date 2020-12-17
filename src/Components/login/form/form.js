import { useState, useEffect } from 'react'
import { Container, VStack, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

import UsernameInput from '../../input/username-input'
import PasswordInput from '../../input/password-input'
import LoginButton from '../login-button'
import SuccessState from '../../success-state'

import { useValidateUser } from '../../../hooks/use-validate-user'
import { USERNAME, PASSWORD } from '../../../constants'

const Form = ({ setShowErrorAnimation }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [validation, validateUser] = useValidateUser({
		username,
		password
	})

	const { isLoading, hasError, userValidated } = validation

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
		// TODO: iplement Validation, dont Know rules for validation
		console.log('run validation')
	}

	useEffect(() => {
		setShowErrorAnimation(hasError)
	}, [hasError, setShowErrorAnimation])

	if (userValidated) return <SuccessState />

	return (
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
	)
}

Form.propTypes = {
	setShowErrorAnimation: PropTypes.func.isRequired
}

export default Form
