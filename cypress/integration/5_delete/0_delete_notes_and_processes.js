describe("@@@@@ DELETE THE REMAINING NOTES AND PROCESSES @@@@@", () => {

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