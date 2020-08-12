describe("@@@@@ SIGNUP TESTING @@@@@", () => {

    context("Isolation form steps - comment out when running all tests together", () => {

        it("get the form ready", () => {

            cy.visit("https://localhost:3000")
            cy.get('[test_handle="CTA_button"]').click()
            cy.get('[test_handle="switch_form_type_text"]').click()
        })

    })

    context("Checking the password criteria", () => {

        it("Switch to the login form and enter a password under 8 characters - all ticks should be grey", () => {

            cy.get('[test_handle="switch_form_type_text"]').click()

            cy.get('[test_handle="grey_tick"]').should("have.length", 3)

            cy.get('[test_handle="green_tick"]').should("have.length", 0)

            cy.get('[test_handle="password_input"]').click().type("1234567")

            cy.get('[test_handle="grey_tick"]').eq(0).should("be.visible")

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

        })

        it("Add another character, making it 8 - 8 characters tick should turn green", () => {

            cy.get('[test_handle="password_input"]').click().type("1")

            cy.get('[test_handle="green_tick"]').eq(0).should("be.visible")

            cy.get('[test_handle="grey_tick"]').should("have.length", 2)

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

        })

        it("Add an 8 character, non matching repeat password, match tick should stay grey", () => {

            cy.get('[test_handle="repeat_password_input"]').click().type("12345678")

            cy.get('[test_handle="grey_tick"]').should("have.length", 2)

            cy.get('[test_handle="green_tick"]').should("have.length", 1)

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

        })

        it("Correct the repeat password, so they match - match tick should turn green", () => {

            cy.get('[test_handle="repeat_password_input"]').click().type("{backspace}1")

            cy.get('[test_handle="grey_tick"]').should("have.length", 1)

            cy.get('[test_handle="green_tick"]').should("have.length", 2)

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

        })

        it("Add a capital letter to each password - uppercase tick should turn green", () => {

            cy.get('[test_handle="grey_tick"]').should("have.length", 1)

            cy.get('[test_handle="green_tick"]').should("have.length", 2)

            cy.get('[test_handle="repeat_password_input"]').click().type("{backspace}D")

            cy.get('[test_handle="password_input"]').click().type("{backspace}D")

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

        })

    })

    context("Checking the action button changing colour on all inputs being filled", () => {

        it("Add an email address - button should still be grey", () => {

            cy.get('[test_handle="email_or_username_input"]').type("billycatchpolee@live.co.uk")

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

        })

        it("Add a username - button should turn blue", () => {

            cy.get('[test_handle="username_input"]').type("B")

            cy.get('[test_handle="action_button"]').should("have.css", "background-color", "rgb(24, 119, 242)")

        })

    })

    context("Submitting the form with valid information", () => {

        it("Press submit, should signup and redirect to the home screen", () => {

            cy.get('[test_handle="action_button"]').click()

            cy.wait(500)

            cy.url().should("include", `/dashboard`)

        })

        it("Logout and go back to the signup form to test failure cases", () => {

            cy.get('[test_handle="menu_toggle"]').click({ force: true })

            cy.get('[test_handle="logout_button"]').click({ force: true })

            cy.get('[test_handle="CTA_button"]').click()

        })

    })

    context("Submitting the form with valid information", () => {

        it("Enter valid passwords", () => {

            cy.get('[test_handle="password_input"]').type("1234567B")

            cy.get('[test_handle="repeat_password_input"]').type("1234567B")

        })

        it("Enter email in use and username in use then submit - should throw email error", () => {

            cy.get('[test_handle="email_or_username_input"]').type("billycatchpolee@live.co.uk")

            cy.get('[test_handle="username_input"]').type("b")

            cy.get('[test_handle="action_button"]').click()

            cy.get('[test_handle="input_error"]').should("have.text", "Sorry, that email is unavailable")


        })

        it("Change the email to a valid one then submit - should throw username error", () => {

            cy.get('[test_handle="email_or_username_input"]').clear().type("test1@test.com")

            cy.get('[test_handle="action_button"]').click()

            cy.get('[test_handle="input_error"]').should("have.text", "Sorry, that username is unavailable")

        })

        it("Change the username to valid one then submit - should signup successfully", () => {

            cy.get('[test_handle="username_input"]').clear().type("bb")

            cy.get('[test_handle="action_button"]').click()

            cy.wait(500)

            cy.url().should("include", `/dashboard`)

        })

        it("Logout and go back to the login form", () => {

            cy.get('[test_handle="menu_toggle"]').click({ force: true })

            cy.get('[test_handle="logout_button"]').click({ force: true })

            cy.get('[test_handle="CTA_button"]').click()

        })

    })

    context("Create another account - berny", ()=> {
    
        it("Enter valid passwords", () => {
    
            cy.get('[test_handle="password_input"]').type("1234567B")
    
            cy.get('[test_handle="repeat_password_input"]').type("1234567B")
    
        })
    
        it("Enter email in use and username in use then submit", () => {
    
            cy.get('[test_handle="email_or_username_input"]').type("test3@test.com")
    
            cy.get('[test_handle="username_input"]').type("berny")
    
            cy.get('[test_handle="action_button"]').click()
    
    
        })

    })

    context("Create another account - belinda", ()=> {

        it("Logout and go back to the signup form to test failure cases", () => {

            cy.get('[test_handle="menu_toggle"]').click({ force: true })
    
            cy.get('[test_handle="logout_button"]').click({ force: true })
    
            cy.get('[test_handle="CTA_button"]').click()
    
        })
    
        it("Enter valid passwords", () => {
    
            cy.get('[test_handle="password_input"]').type("1234567B")
    
            cy.get('[test_handle="repeat_password_input"]').type("1234567B")
    
        })
    
        it("Enter email in use and username in use then submit", () => {
    
            cy.get('[test_handle="email_or_username_input"]').type("test4@test.com")
    
            cy.get('[test_handle="username_input"]').type("belinda")
    
            cy.get('[test_handle="action_button"]').click()
    
    
        })

    })

    context("Create another account - barney", ()=> {

        it("Logout and go back to the signup form to test failure cases", () => {

            cy.get('[test_handle="menu_toggle"]').click({ force: true })
    
            cy.get('[test_handle="logout_button"]').click({ force: true })
    
            cy.get('[test_handle="CTA_button"]').click()
    
        })
    
        it("Enter valid passwords", () => {
    
            cy.get('[test_handle="password_input"]').type("1234567B")
    
            cy.get('[test_handle="repeat_password_input"]').type("1234567B")
    
        })
    
        it("Enter email in use and username in use then submit", () => {
    
            cy.get('[test_handle="email_or_username_input"]').type("test5@test.com")
    
            cy.get('[test_handle="username_input"]').type("barney")
    
            cy.get('[test_handle="action_button"]').click()
    
    
        })

    })

    context("Create another account - bianca", ()=> {

        it("Logout and go back to the signup form to test failure cases", () => {

            cy.get('[test_handle="menu_toggle"]').click({ force: true })
    
            cy.get('[test_handle="logout_button"]').click({ force: true })
    
            cy.get('[test_handle="CTA_button"]').click()
    
        })
    
        it("Enter valid passwords", () => {
    
            cy.get('[test_handle="password_input"]').type("1234567B")
    
            cy.get('[test_handle="repeat_password_input"]').type("1234567B")
    
        })
    
        it("Enter email in use and username in use then submit", () => {
    
            cy.get('[test_handle="email_or_username_input"]').type("test6@test.com")
    
            cy.get('[test_handle="username_input"]').type("bianca")
    
            cy.get('[test_handle="action_button"]').click()
    
    
        })

    })

})


