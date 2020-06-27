// describe("@@@@@ LOGIN @@@@@", () => {

//     it("Visit the homepage", () => cy.visit("https://localhost:3000"))

//     it("Click the login button", () => {

//         cy.get('[test_handle="login_text"]').click({ force: true })

//         cy.get('[test_handle="form_email_input"]').should("be.visible")
//         cy.get('[test_handle="form_password_input"]').should("be.visible")

//         cy.get('[test_handle="login_button"]').should("not.be.visible")

//     })

//     context("Ensuring the login button displays correctly", () => {

//         it("Type in the email box - Login button should not now", () => {

//             cy.get('[test_handle="form_email_input"]').click().type("noexisto@test.com")
//             cy.get('[test_handle="login_button"]').should("not.be.visible")

//         })

//         it("Type in the password box - Login button should show", () => {

//             cy.get('[test_handle="form_password_input"]').click().type("noexisto@test.com")
//             cy.get('[test_handle="login_button"]').should("be.visible")

//         })

//         it("Clear the password - Login button should disappear", () => {

//             cy.get('[test_handle="form_password_input"]').clear()
//             cy.get('[test_handle="login_button"]').should("not.be.visible")

//             cy.get('[test_handle="form_password_input"]').type("Password")
//             cy.get('[test_handle="login_button"]').should("be.visible")
//         })

//         it("Clear the email - Login button should disappear", () => {

//             cy.get('[test_handle="form_email_input"]').clear()
//             cy.get('[test_handle="login_button"]').should("not.be.visible")

//         })
//     })

//     context("Login expected failures", () => {

//         it("Enters an non existing email - Should get a validation error", () => {

//             cy.get('[test_handle="form_email_input"]').type("Noexisto@test.com")
//             cy.get('[test_handle="login_button"]').click()

//             cy.get('[test_handle="form_validation_error"]').should("have.text", "Sorry, that email/username does not exist in our database")
//         })

//         it("Enters a valid email, incorrect password - Should get a validation error", () => {

//             cy.get('[test_handle="form_email_input"]').clear().type("billycatchpolee@live.co.uk")
//             cy.get('[test_handle="login_button"]').click()

//             cy.get('[test_handle="form_validation_error"]').should("have.text", "Sorry, your password is incorrect")
//         })

//     })

//     context("Login expected passes", () => {

//         it("Enters a valid email and password- Should log in", () => {

//             cy.get('[test_handle="form_password_input"]').clear().type("1234567B")
//             cy.get('[test_handle="login_button"]').click()

//             cy.url().should("include", "dashboard")
//         })

//         it("Visit the homepage", () => cy.visit("https://localhost:3000"))

//         it("Click the login text", () =>  cy.get('[test_handle="login_text"]').click({ force: true }))

//         it("Enters a valid username and password- Should log in", () => {

//             cy.get('[test_handle="form_email_input"]').clear().type("billy")
//             cy.get('[test_handle="form_password_input"]').clear().type("1234567B")
//             cy.get('[test_handle="login_button"]').click()

//             cy.url().should("include", "dashboard")
//         })



//     })

// })