describe("@@@@@ LOGIN TESTING @@@@@", () => {

    context("Isolation form steps - comment out when running all tests together", () => {

        it("get the form ready", () => {

            cy.visit("https://localhost:3000")
            cy.get('[test_handle="CTA_button"]').click()
        })

    })

    context("Login with a username/email which doesn't exist", () => {

        it("switch to the login form, then enter a non existing email - button should be grey", () => {

            cy.get('[test_handle="switch_form_type_text"]').click()

            cy.get('[test_handle="email_or_username_input"]').type("No existo")

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")
        })

        it("Enter a valid password - button should turn blue", () => {

            cy.get('[test_handle="password_input"]').type("1234567D")

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(24, 119, 242)")
        })

        it("Submit with incorrect details - should throw a username error", () => {

            cy.get('[test_handle="action_button"]').click()

            cy.get('[test_handle="input_error"]').should("have.text", "Sorry, that email/username does not exist in our database")

        })

        it("Enter a valid email and submit again - should log in", () => {

            cy.get('[test_handle="email_or_username_input"]').clear().type("billycatchpolee@live.co.uk")

            cy.get('[test_handle="action_button"]').click()

            cy.wait(500)

            cy.url().should("include", `/dashboard`)

        })

        it("Logout and go back to the login form to test password failure cases", () => {

            cy.get('[test_handle="menu_toggle"]').click({ force: true })

            cy.get('[test_handle="logout_button"]').click({ force: true })

            cy.get('[test_handle="CTA_button"]').click()

        })

    })

    context("Login with a valid email, but incorrect password", () => {

        it("switch to the login form, then enter a non existing email - button should be grey", () => {

            cy.get('[test_handle="switch_form_type_text"]').click()

            cy.get('[test_handle="email_or_username_input"]').type("billycatchpolee@live.co.uk")

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")
        })


        it("Enter a invalid password - button should turn blue", () => {

            cy.get('[test_handle="password_input"]').type("1234567")

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(24, 119, 242)")
        })

        it("Submit with incorrect details - should throw a password error", () => {

            cy.get('[test_handle="action_button"]').click()

            cy.get('[test_handle="input_error"]').should("have.text", "Sorry, your password is incorrect")

        })

        it("Enter the correct password, then submit - should login", () => {

            cy.get('[test_handle="password_input"]').type("D")

            cy.get('[test_handle="action_button"]').click()

            cy.wait(500)

            cy.url().should("include", `/dashboard`)

        })
        
        it("Logout and go back to the login form to test recover password", () => {

            cy.get('[test_handle="menu_toggle"]').click({ force: true })

            cy.get('[test_handle="logout_button"]').click({ force: true })

            cy.get('[test_handle="CTA_button"]').click()

        })

    })

})