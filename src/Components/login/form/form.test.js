import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Form from '.'
import * as hooks from '../../../hooks/use-validate-user'

const renderComponent = (props) => {
	return render(<Form {...props} />)
}

const LOGIN_BUTTON = 'login-button'
const USERNAME_INPUT = 'username-input'
const PASSWORD_INPUT = 'password-input'

const getLoginButton = () => screen.getByTestId(LOGIN_BUTTON)
const getUsernameInput = () => screen.getAllByTestId(USERNAME_INPUT)[0]
const getPasswordInput = () => screen.getByTestId(PASSWORD_INPUT)

const fillFormAndSubmit = (username, password) => {
	const usernameInput = getUsernameInput()
	const passwordInput = getPasswordInput()
	fireEvent.change(usernameInput, { target: { value: username } })
	fireEvent.change(passwordInput, { target: { value: password } })
	fireEvent.click(getLoginButton())
}

describe('Header', () => {
	it('should call the custo hook with the correct credentials', () => {
		const setShowErrorAnimation = jest.fn()
		const custoHook = jest.fn()
		jest
			.spyOn(hooks, 'useValidateUser')
			.mockImplementation(() => [
				{ userValidated: false, isLoading: false, hasError: false },
				custoHook
			])
		renderComponent({ setShowErrorAnimation })
		fillFormAndSubmit('airfinity', 'test')
		expect(setShowErrorAnimation).toBeCalledWith(false)
		expect(custoHook).toBeCalledWith({
			password: 'test',
			username: 'airfinity'
		})
	})
})
