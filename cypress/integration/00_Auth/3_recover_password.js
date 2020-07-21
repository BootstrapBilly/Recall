// describe("@@@@@ RECOVER PASSWORD TESTING @@@@@", () => {

//     context("Isolation form steps - comment out when running all tests together", () => {

//         it("get the form ready", () => {

//             cy.visit("https://localhost:3000")
//             cy.get('[test_handle="CTA_button"]').click()
//         })

//     })

//     context("Check the recover password form is working correctly", () => {

//         it("Navigate to the recover password form - button should be grey", () => {

//             cy.get('[test_handle="forgot_password"]').click()

//             cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")
//         })

//         it("Enter an email - button should turn blue", () => {

//             cy.get('[test_handle="recover_password_email_input"]').type("t")

//             cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(24, 119, 242)")
//         })

//         it("Submit the form - should display the generic message", () => {

//             cy.get('[test_handle="action_button"]').click()

//             cy.get('[test_handle="input_error"]').should("have.text", "If your email address was found, we just sent you an email with instructions to reset your password")

//         })

//     })

// })