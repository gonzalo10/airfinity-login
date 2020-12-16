import { useEffect } from 'react'
import { useState } from 'react'
import { userLogin } from '../helpers/mock-api'

const useValidateUser = ({ username, password }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [hasError, setHasError] = useState(false)
	const [isSuccess, setIsSucess] = useState(false)
	const [data, setData] = useState(null)

	const validateUser = () => {
		setIsLoading(true)
		fetchData()
	}

	const fetchData = async () => {
		try {
			const response = await userLogin({ username, password })
			setData(response)
			setIsSucess(true)
		} catch (err) {
			setHasError(true)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		setHasError(false)
	}, [username, password])

	return [{ isLoading, hasError, isSuccess, data }, validateUser]
}

export default useValidateUser
