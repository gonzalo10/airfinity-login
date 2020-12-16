const vistiUrl = () => {
	cy.visit('http://localhost:3000')
}

const getUsernameInput = () => cy.dataQa('username-input')
const getPasswordInput = () => cy.dataQa('password-input')
const getLoginButton = () => cy.dataQa('login-button')
const getLoginErrorInput = () => cy.dataQa('login-error-message')
const getSuccessLoginState = () => cy.dataQa('success-login-state')

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
