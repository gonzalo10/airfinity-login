import { Flex, Text, Link } from '@chakra-ui/react'

const SignupHelper = () => {
	return (
		<Flex textAlign='left' width='100%' my={2}>
			<Text fontSize='ml' color='white'>
				Don't have an account? <Link color='gray.50'>Sign up</Link>
			</Text>
		</Flex>
	)
}

export default SignupHelper
