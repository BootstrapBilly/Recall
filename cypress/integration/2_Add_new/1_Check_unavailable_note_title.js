describe("@@@@@ ADD NEW NOTE - TITLE TAKEN ALREADY @@@@@", () => {

context("Adding a new note where the title is already taken", () => {

    it("Navigate to the form, then enter a title which is in use - should show error", () => {

        cy.get('[test_handle="add_new_note_button"]').click()

        cy.get('[test_handle="title_input"]').type("Another note")

        cy.get('[test_handle="form_next_button"]').click()

        cy.get('[test_handle="form_validation_error"]').should("have.text", "You already have a note with that title, please choose another")

    })

})

})