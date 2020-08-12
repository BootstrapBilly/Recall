describe("@@@@@ DELETE THE REMAINING NOTES AND PROCESSES @@@@@", () => {

    it("Login with bb to delete a note and process", () => {

        cy.get('[test_handle="CTA_button"]').click()

        cy.get('[test_handle="switch_form_type_text"]').click()

        cy.get('[test_handle="email_or_username_input"]').type("bb")

        cy.get('[test_handle="password_input"]').type("1234567B")

        cy.get('[test_handle="action_button"]').click({force:true})

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="view_all_nav_square"]').click()

        //note that the user id is hardcoded into local storage for testing purposes, do not delete test@test.com (1st record in the users collection otherwise this will not work) - add note line 3

    })

    it("Cancel the delete - should not delete the note", () => {

        cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

        cy.get('[test_handle="note_delete_button"]').eq(0).click()

        cy.get('[test_handle="cancel_delete"]').eq(0).click()

        cy.get('[test_handle="note_delete_button"]').should("be.visible")
    })

    it("Confirm delete - should delete the note", () => {

        cy.get('[test_handle="note_delete_button"]').eq(0).click()

        cy.get('[test_handle="confirm_delete"]').eq(0).click()

        cy.get('[test_handle="note_container"]').should("have.length", 5)
    })

    it("Delete the other 5 notes", () => {

        cy.get('[test_handle="note_toggle_icon"]').eq(0).click()
        cy.get('[test_handle="note_delete_button"]').eq(0).click()
        cy.get('[test_handle="confirm_delete"]').eq(0).click()
        cy.get('[test_handle="note_container"]').should("have.length", 4)

        cy.get('[test_handle="note_toggle_icon"]').eq(0).click()
        cy.get('[test_handle="note_delete_button"]').eq(0).click()
        cy.get('[test_handle="confirm_delete"]').eq(0).click()
        cy.get('[test_handle="note_container"]').should("have.length", 3)

        cy.get('[test_handle="note_toggle_icon"]').eq(0).click()
        cy.get('[test_handle="note_delete_button"]').eq(0).click()
        cy.get('[test_handle="confirm_delete"]').eq(0).click()
        cy.get('[test_handle="note_container"]').should("have.length", 2)

        cy.get('[test_handle="note_toggle_icon"]').eq(0).click()
        cy.get('[test_handle="note_delete_button"]').eq(0).click()
        cy.get('[test_handle="confirm_delete"]').eq(0).click()
        cy.get('[test_handle="note_container"]').should("have.length", 1)

        cy.get('[test_handle="note_toggle_icon"]').eq(0).click()
        cy.get('[test_handle="note_delete_button"]').eq(0).click()
        cy.get('[test_handle="confirm_delete"]').eq(0).click()
        cy.get('[test_handle="note_container"]').should("have.length", 0)

    })

})