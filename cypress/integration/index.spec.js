const vistiUrl = () => {
	cy.visit('http://localhost:3000')
}

const getUsernameInput = () => cy.dataId('username-input')
const getPasswordInput = () => cy.dataId('password-input')
const getLoginButton = () => cy.dataId('login-button')
const getLoginErrorInput = () => cy.dataId('login-error-message')
const getSuccessLoginState = () => cy.dataId('success-login-state')

const fillForm = (username, password) => {
	getUsernameInput().type(username)
	getPasswordInput().type(password)
}

describe('Input value', () => {
	beforeEach(() => {
		vistiUrl()
	})

	it('should show error messagewhen credentials are incorrect', () => {
		fillForm('test@test.co', 'test')
		getLoginButton().click()
		getLoginErrorInput().should('be.visible')
	})

	it('should login when credentials are correct', () => {
		fillForm('seb@airfinity.com', 'test')
		getLoginButton().click()
		getSuccessLoginState().should('be.visible')
	})
})
