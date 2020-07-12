// describe("@@@@@ ADD NEW COLLECTION @@@@@", () => {

//     it("Visit the account", () => cy.visit("https://localhost:3000/account"))

//     it("Navigate to the combine", () => {

//         cy.get('[test_handle="menu_toggle"]').click()

//         cy.get('[test_handle="combine_notes_nav_square"]').click()
//     })

// })

// context("Testing the button turning from grey to blue", () => {

//     it("Button should be greyed out to start with no notes on display", () => {

//         cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")
//         cy.get('[test_handle="note_container"]').should("have.length", 0)

//     })

//     it("Type A - 5 notes should appear", () => {

//         cy.get('[test_handle="search_input"]').type("a")
//         cy.get('[test_handle="note_container"]').should("have.length", 5)
//     })

//     it("Click one note - should be rendered in blue as a selected note, button should still be grey", () => {

//         cy.get('[test_handle="note_clickable_area"]').eq(0).click({ force: true })

//         cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

//         cy.get('[test_handle="selected_note"]').should("have.length", 1)

//     })

//     it("Click another note - should render it and the button should turn blue", () => {

//         cy.get('[test_handle="note_clickable_area"]').eq(2).click({ force: true })

//         cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", "rgb(24, 119, 242)")

//         cy.get('[test_handle="selected_note"]').should("have.length", 2)

//     })

//     it("Remove one of the selected notes - button should turn grey", () => {

//         cy.get('[test_handle="note_clickable_area"]').eq(0).click({ force: true })

//         cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", "rgb(128, 128, 128)")

//         cy.get('[test_handle="selected_note"]').should("have.length", 1)

//     })

// })

// context("Checking duplicate note combinations", () => {

//     it("Add a duplicate note - should render them both", () => {

//         cy.get('[test_handle="note_clickable_area"]').eq(2).click({ force: true })

//         cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", "rgb(24, 119, 242)")

//         cy.get('[test_handle="selected_note"]').should("have.length", 2)

//     })

//     it("Add a third, different note - should render them all", () => {

//         cy.get('[test_handle="note_clickable_area"]').eq(2).click({ force: true })

//         cy.get('[test_handle="selected_note"]').should("have.length", 3)

//     })

//     it("Click next with the duplicate notes selected - should navigate to the title input", () => {

//         cy.wait(500)

//         cy.get('[test_handle="form_next_button"]').click()

//     })

//     it("Press the back button - notes should still be selected", () => {

//         cy.get('[test_handle="form_back_button"]').click()

//         cy.get('[test_handle="selected_note"]').should("have.length", 3)

//         cy.get('[test_handle="form_next_button"]').click()

//     })

// })

// context("Fill in the form as normal and submit", () => {

//     it("Fill in the title", () => {

//         cy.get('[test_handle="title_input"]').type("A collection")

//         cy.get('[test_handle="form_next_button"]').click()

//     })

//     it("Fill in the body then submit the form", () => {

//         cy.get('[test_handle="body_input"]').type("A body")

//         cy.get('[test_handle="form_next_button"]').click()

//         cy.get('[test_handle="form_next_button"]').click()

//     })


// })