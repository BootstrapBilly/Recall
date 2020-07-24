// describe("@@@@@ DELETE ACCOUNT @@@@@", () => {

//     it("Logout, then log into a different account to delete it", () => {

//         cy.get('[test_handle="menu_toggle"]').click()

//         cy.get('[test_handle="logout_button"]').click()

//         cy.get('[test_handle="CTA_button"]').click()

//         cy.get('[test_handle="switch_form_type_text"]').click()

//         cy.get('[test_handle="email_or_username_input"]').type("billycatchpolee@live.co.uk")

//         cy.get('[test_handle="password_input"]').type("1234567D")

//         cy.get('[test_handle="action_button"]').click()

//     })

//     it("Navigate to the account management page", () => {

//         cy.get('[test_handle="menu_toggle"]').click()

//         cy.get('[test_handle="account_nav_square"]').click()

//     })

//     context("Testing the failure cases", () => {

//         it("Open the delete account option ", () => {

//             cy.get('[test_handle="delete_account_content"]').should("not.be.visible")

//             cy.get('[test_handle="delete_account_option"]').click()

//             cy.get('[test_handle="delete_account_content"]').should("be.visible")

//         })

//         it("Try to submit the form with no password - nothing should happen", () => {

//             cy.get('[test_handle="delete_account_button"]').click()

//             cy.get('[test_handle="delete_account_content"]').should("be.visible")

//         })

//         it("Try to submit the form with the wrong password - should throw the invalid password error", () => {

//             cy.get('[test_handle="password_input"]').type("1234567")

//             cy.get('[test_handle="delete_account_button"]').click()

//             cy.get('[test_handle="error_message"]').should("have.text", "Sorry, your password is incorrect")

//             cy.get('[test_handle="delete_account_content"]').should("be.visible")

//         })

//     })

    
//     context("Testing the success case", () => {

//         it("Submit the form with the right password - should delete the account, then redirect to the auth screen", () => {

//             cy.get('[test_handle="password_input"]').type("D")

//             cy.get('[test_handle="delete_account_button"]').click()

//         })

//         it("Try to log in the account which was just deleted - should throw 'Sorry, that email/username does not exist in our database'", () => {

//             cy.get('[test_handle="CTA_button"]').click()

//             cy.get('[test_handle="switch_form_type_text"]').click()
    
//             cy.get('[test_handle="email_or_username_input"]').type("billycatchpolee@live.co.uk")
    
//             cy.get('[test_handle="password_input"]').type("1234567D")
    
//             cy.get('[test_handle="action_button"]').click()

//             cy.get('[test_handle="input_error"]').should("have.text", "Sorry, that email/username does not exist in our database")

//         })

//     })


// })