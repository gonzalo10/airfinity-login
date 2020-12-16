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
import { useState } from 'react'
import { PASSWORD } from '../../constants'

const PasswordInput = ({ password, handlePassword, hasError }) => {
	const [showPassword, setShowPassword] = useState(false)
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
					data-qa='password-input'
					type={showPassword ? 'text' : PASSWORD}
					autoComplete='current-password'
					id={PASSWORD}
					placeholder='Password'
					value={password}
					onChange={handlePassword}
					isRequired
				/>
				<InputRightElement width='3rem'>
					<Button
						h='1.5rem'
						size='sm'
						onClick={() => setShowPassword((show) => !show)}>
						{showPassword ? <ViewOffIcon /> : <ViewIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>

			<FormErrorMessage fontWeight='500' data-qa='login-error-message'>
				⚠️ Incorrect email or password.
			</FormErrorMessage>
		</FormControl>
	)
}

export default PasswordInput
