describe("@@@@@ UNAVAILABLE EMAIL/USERNAME @@@@@", () => {

    it("Visit the homepage", () => cy.visit("https://localhost:3000"))

    it("Tries to sign up with an unavailable email - should receive a validation error", () => {

        cy.get('[test_handle="signup_button"]').click()

        cy.get('[test_handle="form_email_input"]').type("billycatchpolee@live.co.uk")

        cy.get('[test_handle="form_next_button"]').click()

        cy.get('[test_handle="form_validation_error"]').should("have.text", "Sorry, that email is unavailable")
    })

    it("Enters valid email and clicks next - should go to the username input box", () => {


        cy.get('[test_handle="form_email_input"]').type("{backspace}{backspace}{backspace}m")

        cy.get('[test_handle="form_next_button"]').click()

        cy.get('[test_handle="form_validation_error"]').should("not.be.visible")

        cy.get('[test_handle="form_username_input"]').should("be.visible")
    })

    it("Tries to sign up with an unavailable username - should receive a validation error", () => {

        cy.get('[test_handle="form_username_input"]').type("Billy")

        cy.get('[test_handle="form_next_button"]').click()

        cy.get('[test_handle="form_validation_error"]').should("have.text", "Sorry, that username is unavailable")
    })
})

