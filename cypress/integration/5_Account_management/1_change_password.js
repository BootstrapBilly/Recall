describe("@@@@@ CHANGE PASSWORD @@@@@", () => {

    it("Navigate to the account management page", () => {

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="account_nav_square"]').click()

    })

    context("Testing the button - should stay grey and not allow submission until there is a value in each input", () => {

        it("Open the option - content should appear and button should be grey to start", () => {

            cy.get('[test_handle="change_password_content"]').should("not.be.visible")

            cy.get('[test_handle="password_option"]').click()

            cy.get('[test_handle="change_password_content"]').should("be.visible")

            cy.get('[test_handle="change_password_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

        })

        it("Submit the form with empty inputs - nothing should happen", () => {

            cy.get('[test_handle="change_password_button"]').click()

            cy.get('[test_handle="change_password_content"]').should("be.visible")

        })

        it("Add the old password (wrong) - button should still be grey and not work", () => {

            cy.get('[test_handle="old_password_input"]').type("1234567")

            cy.get('[test_handle="change_password_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

            cy.get('[test_handle="change_password_button"]').click()

            cy.get('[test_handle="change_password_content"]').should("be.visible")

        })

        it("Add a new (invalid) password - button should still be grey and not work", () => {

            cy.get('[test_handle="password_input"]').type("1234567")

            cy.get('[test_handle="change_password_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

            cy.get('[test_handle="change_password_button"]').click()

            cy.get('[test_handle="change_password_content"]').should("be.visible")

        })

        it("Add a new (invalid) repeat password - button should still be grey and not work", () => {

            cy.get('[test_handle="repeat_password_input"]').type("1234567")

            cy.get('[test_handle="change_password_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

            cy.get('[test_handle="change_password_button"]').click()

            cy.get('[test_handle="change_password_content"]').should("be.visible")

        })

        it("Change the password and repeat password fields so theyre valid then submit - should work and show the old password alert", () => {

            cy.get('[test_handle="password_input"]').type("M")
            cy.get('[test_handle="repeat_password_input"]').type("M")

            cy.get('[test_handle="change_password_button"]').should("have.css", "background-color", "rgb(24, 119, 242)")

            cy.get('[test_handle="change_password_button"]').click()

            cy.get('[test_handle="change_password_content"]').should("be.visible")

            cy.get('[test_handle="error_message"]').should("have.text", "Sorry, your old password is incorrect")

        })

    })

    context("Testing the success cases with valid data", () => {

        it("Change the old password field so its valid, then submit - should work and show a success alert", () => {

            cy.get('[test_handle="old_password_input"]').type("B")

            cy.get('[test_handle="change_password_button"]').click()

            cy.get('[id="easy-alert"]').should("be.visible")

            cy.get('[test_handle="change_password_content"]').should("not.be.visible")

        })

        it("Change the password back to normal", () => {

            cy.get('[test_handle="password_option"]').click()

            cy.get('[test_handle="old_password_input"]').type("1234567M")

            cy.get('[test_handle="password_input"]').type("1234567B")

            cy.get('[test_handle="repeat_password_input"]').type("1234567B")

            cy.get('[test_handle="change_password_button"]').click()

            cy.get('[id="easy-alert"]').should("be.visible")
            
            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="logout_button"]').click()

        })

    })

})