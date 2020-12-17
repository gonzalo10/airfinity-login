import { useEffect } from 'react'
import { useState } from 'react'
import { userLogin } from '../helpers/mock-api'

export const useValidateUser = ({ username, password }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [hasError, setHasError] = useState(false)
	const [userValidated, setUserValidated] = useState(false)
	const [data, setData] = useState(null)

	const validateUser = () => {
		setIsLoading(true)
		setHasError(false)
		fetchData()
	}

	const fetchData = async () => {
		try {
			const response = await userLogin({ username, password })
			setData(response)
			setUserValidated(true)
		} catch (err) {
			console.error(err)
			setHasError(true)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		setHasError(false)
	}, [username, password])

	return [{ isLoading, hasError, userValidated, data }, validateUser]
}
