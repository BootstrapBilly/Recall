describe("@@@@@ RECOVER PASSWORD TESTING @@@@@", () => {



        it("get the form ready", () => {

            cy.visit("https://localhost:3000")
            cy.get('[test_handle="CTA_button"]').click()
        })

    

    context("Check the recover password form is working correctly", () => {

        it("Navigate to the recover password form - button should be grey", () => {

            cy.get('[test_handle="forgot_password"]').click()

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")
        })

        it("Enter an email - button should turn blue", () => {

            cy.get('[test_handle="recover_password_email_input"]').type("t")

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(24, 119, 242)")
        })

        it("Submit the form - should display the generic message", () => {

            cy.get('[test_handle="action_button"]').click()

            cy.get('[test_handle="input_error"]').should("have.text", "If your email address was found, we just sent you an email with instructions to reset your password")

        })

    })

    context("Log back in for the prodeeding tests", () => {

        it("Navigate back to the login form and fill and submit it", () => {

            cy.get('[test_handle="switch_form_type_text"]').click()
 
            cy.get('[test_handle="email_or_username_input"]').type("test1@test.com")

            cy.get('[test_handle="password_input"]').type("1234567B")

            cy.get('[test_handle="action_button"]').click()

        })


    })

})