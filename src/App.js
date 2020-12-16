import { Image } from '@chakra-ui/react'

import Login from './login'
import Airfinity from './assets/electrocardiogram.png'

function App() {
	return (
		<>
			<Image
				src={Airfinity}
				position='absolute'
				width='60%'
				bottom='10px'
				alt=''
			/>
			<Login />
		</>
	)
}

export default App
