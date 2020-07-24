describe("@@@@@ LOGIN TO ASSIGN THE USER ID FOR PROCEEDING TESTS @@@@@", () => {

    it("Visit the homepage", () => cy.visit("https://localhost:3000"))

        it("visit the auth screen and sign in", () => {

            cy.get('[test_handle="CTA_button"]').click()

            cy.get('[test_handle="switch_form_type_text"]').click()

            cy.get('[test_handle="email_or_username_input"]').type("test1@test.com")

            cy.get('[test_handle="password_input"]').type("1234567B")

            cy.get('[test_handle="action_button"]').click()

            //note that the user id is hardcoded into local storage for testing purposes, do not delete test@test.com (1st record in the users collection otherwise this will not work) - add note line 3

        })

})