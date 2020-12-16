import { Button } from '@chakra-ui/react'

const LoginButton = ({ isLoading }) => {
	return (
		<Button
			data-qa='login-button'
			width='100%'
			type='submit'
			isLoading={isLoading}
			loadingText='Submitting'
			color='white'
			background='#055dff'
			_hover={{ bg: '#0350de' }}
			mt={8}
			variant='solid'>
			Log in
		</Button>
	)
}

export default LoginButton
