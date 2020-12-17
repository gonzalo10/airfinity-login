import { CORRECT_USERNAME, CORRECT_PASSWORD } from '../constants'

export const userLogin = async ({ username, password }) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
				resolve()
			} else {
				reject(new Error('Incorrect email or password.'))
			}
		}, 2000)
	})
}
