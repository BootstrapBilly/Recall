// describe("@@@@@ SIGNUP @@@@@", () => {

//     it("Visit the homepage", () => cy.visit("https://localhost:3000"))

//     context("Step 1 - email", () => {

//    it("Click the signup text", () =>  cy.get('[test_handle="signup_button"]').click())

//         it("Type something in - the next button should show", () => {

//             cy.get('[test_handle="form_back_button"]').should("not.be.visible")
//             cy.get('[test_handle="form_next_button"]').should("not.be.visible")

//             cy.get('[test_handle="form_email_input"]').type("a")

//             cy.get('[test_handle="form_next_button"]').should("be.visible")

//         })

//         it("Clear the input - next button should go away", () => {

//             cy.get('[test_handle="form_back_button"]').should("not.be.visible")
//             cy.get('[test_handle="form_next_button"]').should("be.visible")

//             cy.get('[test_handle="form_email_input"]').type("{backspace}")

//             cy.get('[test_handle="form_next_button"]').should("not.be.visible")

//         })

//         it("Submit a valid username and click next - username should show", () => {

//             cy.get('[test_handle="form_email_input"]').type("Billycatchpolee@live.co.uk")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="form_email_input"]').should("not.be.visible")
//             cy.get('[test_handle="form_username_input"]').should("be.visible")

//         })

//     })

//     context("Step 2 - username", () => {

//         it("Click the back button - should go back to email with the data still present", () => {

//             cy.get('[test_handle="form_back_button"]').click()

//             cy.get('[test_handle="form_email_input"]').should("be.visible")
//             cy.get('[test_handle="form_email_input"]').should("have.value", "Billycatchpolee@live.co.uk")
//             cy.get('[test_handle="form_username_input"]').should("not.be.visible")

//             cy.get('[test_handle="form_next_button"]').click()
//         })

//         it("Click the greyed out next button - Nothing should happen", () => {

//             cy.get('[test_handle="form_next_button"]').click()
//             cy.get('[test_handle="form_username_input"]').should("be.visible")
//         })

//         it("Type in a username - the next button should turn blue", () => {

//             cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")
//             cy.get('[test_handle="form_username_input"]').type("billy")
//             cy.get('[test_handle="form_next_button"]').should("not.have.css", "background-color", "rgb(128, 128, 128)")
//         })

//         it("Clear the username input - the next button should turn grey", () => {

//             cy.get('[test_handle="form_next_button"]').should("not.have.css", "background-color", "rgb(128, 128, 128)")

//             cy.get('[test_handle="form_username_input"]').type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}").type("{backspace}")

//             cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

//         })

//         it("Enter the username again, then click next - the password form should load", () => {

//             cy.get('[test_handle="form_username_input"]').type("billy")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="form_username_input"]').should("not.be.visible")

//             cy.get('[test_handle="form_password_input"]').should("be.visible")
//             cy.get('[test_handle="form_repeat_password_input"]').should("be.visible")

//         })
//     })

//     context("Step 3 - password", () => {

//         it("Click the back button - should go back to username with the data still present", () => {

//             cy.get('[test_handle="form_back_button"]').click()

//             cy.get('[test_handle="form_username_input"]').should("be.visible")
//             cy.get('[test_handle="form_username_input"]').should("have.value", "billy")

//             cy.get('[test_handle="form_password_input"]').should("not.be.visible")
//             cy.get('[test_handle="form_repeat_password_input"]').should("not.be.visible")

//             cy.get('[test_handle="form_next_button"]').click()
//         })

//         it("Click the greyed out next button - Nothing should happen", () => {

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="form_password_input"]').should("be.visible")
//             cy.get('[test_handle="form_repeat_password_input"]').should("be.visible")

//             cy.get('[test_handle="form_validation_error"]').should("not.be.visible")
//         })

//         it("Enter  under 8 char passwords then submit - Should receive validation error", () => {

//             cy.get('[test_handle="form_password_input"]').type("1234567")
//             cy.get('[test_handle="form_repeat_password_input"]').type("1234567")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="form_validation_error"]').should("have.text", "Your password must be at least 8 characters")
//         })

//         it("Enter 8 char passwords with no caps - Should receive validation error", () => {

//             cy.get('[test_handle="form_password_input"]').type("b")
//             cy.get('[test_handle="form_repeat_password_input"]').type("b")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="form_validation_error"]').should("have.text", "Your password must contain at least 1 uppercase letter")
//         })

//         it("Enter non matching passwords - Should receive validation error", () => {

//             cy.get('[test_handle="form_password_input"]').type("{backspace}")
//             cy.get('[test_handle="form_repeat_password_input"]').type("{backspace}").type("B")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="form_validation_error"]').should("have.text", "Your passwords must match")
//         })

//         it("Enter correct, conforming passwords - Should create an account and nvagiate to dashboard", () => {

//             cy.get('[test_handle="form_password_input"]').type("B")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.url().should("include", "dashboard")
//         })

//     })

// })