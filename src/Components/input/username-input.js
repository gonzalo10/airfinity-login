import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import PropTypes from 'prop-types'

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

UsernameInput.propTypes = {
	username: PropTypes.string.isRequired,
	handleUsername: PropTypes.func.isRequired,
	hasError: PropTypes.bool.isRequired
}

export default UsernameInput
