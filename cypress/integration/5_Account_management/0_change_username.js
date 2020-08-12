describe("@@@@@ CHANGE USERNAME @@@@@", () => {

    it("Navigate to the account management page", () => {

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="account_nav_square"]').click()

    })

})

context("Testing the button - should stay grey and not allow submission until there is a value in each input", () => {

    it("Open the option - content should appear and button should be grey to start", () => {

        cy.get('[test_handle="change_username_content"]').should("not.be.visible")

        cy.get('[test_handle="username_option"]').click()

        cy.get('[test_handle="change_username_content"]').should("be.visible")

        cy.get('[test_handle="change_username_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

    })

    it("Submit the form with empty inputs - nothing should happen", () => {

        cy.get('[test_handle="change_username_button"]').click()

        cy.get('[test_handle="change_username_content"]').should("be.visible")

    })

    it("Add a username - button should still be grey and not work", () => {

        cy.get('[test_handle="new_username_input"]').type("AB")

        cy.get('[test_handle="change_username_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

        cy.get('[test_handle="change_username_button"]').click()

        cy.get('[test_handle="change_username_content"]').should("be.visible")

    })

    it("Add a password - button should turn green and work", () => {

        cy.get('[test_handle="password_input"]').type("A")

        cy.get('[test_handle="change_username_button"]').should("have.css", "background-color", "rgb(0, 171, 102)")

        cy.get('[test_handle="change_username_button"]').click()

        cy.get('[test_handle="error_message"]').should("have.text", "Sorry, your password is incorrect")

    })

})

context("Testing the success case - should close the input and show an alert", () => {

    it("Type in the right password and submit - should work", () => {

        cy.get('[test_handle="password_input"]').clear().type("1234567B")

        cy.get('[test_handle="change_username_button"]').click()

        cy.get('[test_handle="change_username_content"]').should("not.be.visible")

        cy.get('[id="easy-alert"]').should("be.visible")

    })

    it("Reset the changes and change the username back to bb", () => {

        cy.get('[test_handle="username_option"]').click()

        cy.get('[test_handle="password_input"]').clear().type("1234567B")

        cy.get('[test_handle="new_username_input"]').clear().type("bb")

        cy.get('[test_handle="change_username_button"]').click()

        cy.get('[test_handle="change_username_content"]').should("not.be.visible")

        cy.get('[id="easy-alert"]').should("be.visible")

    })

})
