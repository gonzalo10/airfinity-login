import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { USERNAME } from '../../constants'

const UsernameInput = ({ username, handleUsername, hasError }) => {
	return (
		<FormControl isInvalid={hasError}>
			<FormLabel htmlFor={USERNAME}>Username</FormLabel>
			<Input
				data-testid='username-input'
				autoComplete={USERNAME}
				value={username}
				id={USERNAME}
				placeholder='Username'
				onChange={handleUsername}
				isRequired
			/>
		</FormControl>
	)
}

export default UsernameInput
