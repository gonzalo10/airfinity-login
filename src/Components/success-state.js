import { Flex, Text } from '@chakra-ui/react'

const SuccessState = () => {
	return (
		<Flex
			textAlign='left'
			width='100%'
			mb={4}
			direction='column'
			data-qa='success-login-state'>
			<Text fontSize='xl'> Welcome to Airfinity</Text>
			<Text fontSize='l'> Life Science’s new intelligence</Text>
		</Flex>
	)
}
export default SuccessState
