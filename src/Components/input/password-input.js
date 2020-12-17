import { useState } from 'react'
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	InputRightElement,
	InputGroup,
	Link,
	Flex
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'

import { PASSWORD } from '../../constants'

const PasswordInput = ({ password, handlePassword, hasError }) => {
	const [showPassword, setShowPassword] = useState(false)

	const handleShowPassword = () => {
		setShowPassword((show) => !show)
	}

	return (
		<FormControl isInvalid={hasError}>
			<Flex justify='space-between' width='100%'>
				<FormLabel fontSize='md' htmlFor={PASSWORD}>
					Password
				</FormLabel>
				<Link fontSize='ml'>Forgot password?</Link>
			</Flex>
			<InputGroup>
				<Input
					data-testid='password-input'
					type={showPassword ? 'text' : PASSWORD}
					autoComplete='current-password'
					id={PASSWORD}
					placeholder='Password'
					value={password}
					onChange={handlePassword}
					isRequired
				/>
				<InputRightElement width='3rem'>
					<Button h='1.5rem' size='sm' onClick={handleShowPassword}>
						{showPassword ? <ViewOffIcon /> : <ViewIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>

			<FormErrorMessage fontWeight='500' data-testid='login-error-message'>
				⚠️ Incorrect email or password.
			</FormErrorMessage>
		</FormControl>
	)
}

PasswordInput.propTypes = {
	password: PropTypes.string.isRequired,
	handlePassword: PropTypes.func.isRequired,
	hasError: PropTypes.bool.isRequired
}

export default PasswordInput
