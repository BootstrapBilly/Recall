describe("@@@@@ UPDATE NOTE @@@@@", () => {

    it("Visit the add new page", () => cy.visit("https://localhost:3000/add_new"))

    it("Navigate to the view all page", () => {

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="view_all_nav_square"]').click()

    })

    // context("Single field updates", () => {

    //     it("Update only the title", () => {

    //         cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

    //         cy.get('[test_handle="note_edit_button"]').eq(0).click()

    //         cy.get('[test_handle="note_title"]').eq(0).click().type("Change")

    //         cy.get('[test_handle="note_save_button"]').click()

    //         cy.get('[test_handle="note_title"]').eq(0).should("have.value", "A notechange")

    //     })

    //     it("Update only the subject (Missing subject)", () => {

    //         cy.get('[test_handle="note_edit_button"]').eq(0).click()

    //         cy.get('[test_handle="note_subject"]').eq(0).click().type("Change")

    //         cy.get('[test_handle="note_save_button"]').click()

    //         cy.get('[test_handle="note_subject"]').eq(0).should("have.value", "Change")

    //     })

    //     it("Update only the subject (Subject set)", () => {

    //         cy.get('[test_handle="note_edit_button"]').eq(0).click()

    //         cy.get('[test_handle="note_subject"]').eq(0).click().type("Change")

    //         cy.get('[test_handle="note_save_button"]').click()

    //         cy.get('[test_handle="note_subject"]').eq(0).should("have.value", "Changechange")

    //     })

    //     it("Update only the body", () => {

    //         cy.get('[test_handle="note_edit_button"]').eq(0).click()

    //         cy.get('[test_handle="note_body_input"]').eq(0).click().type("Change")

    //         cy.get('[test_handle="note_save_button"]').click()

    //         cy.get('[test_handle="note_body_input"]').eq(0).should("have.value", "A bodyChange")

    //     })

    //     it("Reset fields to default", () => {

    //         cy.get('[test_handle="note_edit_button"]').eq(0).click()

    //         cy.get('[test_handle="note_title"]').eq(0).clear().type("A note")
    //         cy.get('[test_handle="note_subject"]').eq(0).clear().type("No subject")
    //         cy.get('[test_handle="note_body_input"]').eq(0).clear().type("A body")

    //         cy.get('[test_handle="note_save_button"]').click()

    //         cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

    //     })

    // })

    context("Multiple field updates", () => {

        it("Update the title and subject - on the second note", () => {

            cy.get('[test_handle="note_toggle_icon"]').eq(1).click()

            cy.get('[test_handle="note_edit_button"]').eq(0).click()

            cy.get('[test_handle="note_title"]').eq(1).click().type("Change")

            cy.get('[test_handle="note_subject"]').eq(1).clear().click().type("Change")

            cy.get('[test_handle="note_save_button"]').click()

            cy.get('[test_handle="note_subject"]').eq(1).should("have.value", "Change")

            cy.get('[test_handle="note_title"]').eq(1).should("have.value", "Another notechange")

        })

        it("Reset fields to default", () => {

            cy.get('[test_handle="note_edit_button"]').eq(0).click()

            cy.get('[test_handle="note_title"]').eq(1).clear().type("Another note")
            cy.get('[test_handle="note_subject"]').eq(1).clear().type("Another subject")
            cy.get('[test_handle="note_body_input"]').eq(0).clear().type("Another body")

            cy.get('[test_handle="note_save_button"]').click()

        })

    })

})