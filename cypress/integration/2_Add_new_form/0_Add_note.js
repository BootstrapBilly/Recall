// describe("@@@@@ ADD NEW NOTE @@@@@", () => {

//     it("Navigate to the add new page", () => {

//         cy.get('[test_handle="menu_toggle"]').click({ force: true })

//         cy.get('[test_handle="add_new_nav_square"]').click({ force: true })

//     })

//     context("Testing the option select and back buttons", () => {

//         it("Click the add single note button - should load add note form", () => {

//             // cy.get('[test_handle="add_new_note_button"]').click()

//             cy.get('[test_handle="title_input"]').should("be.visible")

//             cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", 'rgb(128, 128, 128)')

//         })

//         // it("Click the back button - should navigate back to the option select page", () => {

//         //     cy.get('[test_handle="form_back_button"]').click()

//         //     cy.get('[test_handle="title_input"]').should("not.be.visible")

//         //     cy.get('[test_handle="add_new_note_button"]').should("be.visible")
//         // })

//         // it("Click the add collection button - should load add collection form", () => {

//         //     // cy.get('[test_handle="add_new_collection_button"]').click()

//         //     cy.get('[test_handle="title_input"]').should("be.visible")

//         //     cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", 'rgb(128, 128, 128)')

//         //     cy.get('[test_handle="form_input_label"]').should("have.text", "TITLE OF COLLECTION")
//         // })


//         // it("Click the back button - should navigate back to the option select page", () => {

//         //     cy.get('[test_handle="form_back_button"]').click()

//         //     cy.get('[test_handle="title_input"]').should("not.be.visible")

//         //     cy.get('[test_handle="add_new_note_button"]').should("be.visible")
//         // })

//     })

//     context("Adding a new note - No optionals or syntax (invalid search tags)", () => {

//         it("Navigate to add new note, then type something - button should turn blue", () => {

//             // cy.get('[test_handle="add_new_note_button"]').click()

//             cy.get('[test_handle="title_input"]').type("A")

//             cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", 'rgb(24, 119, 242)')

//         })

//         it("Clear the input - button should turn grey", () => {

//             cy.get('[test_handle="title_input"]').clear()

//             cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", 'rgb(128, 128, 128)')

//         })

//         it("Type in the title and press next - should navigate to the note body page", () => {

//             cy.get('[test_handle="title_input"]').type("A note")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="title_input"]').should("not.be.visible")

//             cy.get('[test_handle="body_input"]').should("be.visible")

//             cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", 'rgb(128, 128, 128)')

//         })

//         it("Press the back button - should navigate back to the title with it still populated", () => {

//             cy.get('[test_handle="form_back_button"]').click()

//             cy.get('[test_handle="title_input"]').should("have.value", "A note")

//             cy.get('[test_handle="form_next_button"]').click()

//         })

//         it("Type something in the body - button should turn blue", () => {

//             cy.get('[test_handle="body_input"]').type("A")

//             cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", 'rgb(24, 119, 242)')

//         })

//         it("Clear the input - button should turn grey", () => {

//             cy.get('[test_handle="body_input"]').clear()

//             cy.get('[test_handle="form_next_button"]').should("have.css", "background-color", 'rgb(128, 128, 128)')

//         })

//         it("Enter the body text then press next - should navigate to the optionals", () => {

//             cy.get('[test_handle="body_input"]').type("A body")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="body_input"]').should("not.be.visible")

//             cy.get('[test_handle="subject_input"]').should("be.visible")

//             cy.get('[test_handle="search_tags_input"]').should("be.visible")

//         })

//         it("Press the back button - should navigate back to the title with it still populated", () => {

//             cy.get('[test_handle="form_back_button"]').click()

//             cy.get('[test_handle="body_input"]').should("have.value", "A body")

//             cy.get('[test_handle="form_next_button"]').click()

//         })

//         it("Skip the optionals step - should navigate to the syntax", () => {

//             cy.get('[test_handle="search_tags_input"]').type(",")

//             cy.get('[test_handle="form_next_button"]').click()

//         })

//         it("Submit the form without entering syntax - should display the note", () => {

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="note_container"]').should("be.visible")

//             cy.get('[test_handle="form_reset_button"]').click()

//             cy.get('[test_handle="title_input"]').should("be.visible")
//         })

//     })

//     context("Adding a new note - With optional subject, but no syntax", () => {

//         it("Complete form up until the optionals part", () => {

//             // cy.get('[test_handle="add_new_note_button"]').click()

//             cy.get('[test_handle="title_input"]').type("Another note")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="body_input"]').type("Another body")

//             cy.get('[test_handle="form_next_button"]').click()
//         })

//         it("Enter a subject, then click next", () => {

//             cy.get('[test_handle="subject_input"]').type("Another subject")
//             cy.get('[test_handle="form_next_button"]').click()

//         })

//         it("Submit the form without entering syntax - should display the note", () => {

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="note_container"]').should("be.visible")

//             cy.get('[test_handle="form_reset_button"]').click()

//         })

//     })

//     context("Adding a new note - With optional search tags, but no syntax", () => {

//         it("Complete form up until the optionals part", () => {

//             // cy.get('[test_handle="add_new_note_button"]').click()

//             cy.get('[test_handle="title_input"]').type("Creating an api")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="body_input"]').type("Create a new project from the boilerplate")

//             cy.get('[test_handle="form_next_button"]').click()
//         })

//         it("Enter search tags, then click next", () => {

//             cy.get('[test_handle="search_tags_input"]').type("API Boilerplate,")
//             cy.get('[test_handle="form_next_button"]').click()

//         })

//         it("Submit the form without entering syntax - should display the note", () => {

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="note_container"]').should("be.visible")

//             cy.get('[test_handle="form_reset_button"]').click()

//         })

//     })

//     context("Adding a new note - With optional subject and search tags, but no syntax", () => {

//         it("Complete form up until the optionals part", () => {

//             // cy.get('[test_handle="add_new_note_button"]').click()

//             cy.get('[test_handle="title_input"]').type("React router")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="body_input"]').type("How to set up react router")

//             cy.get('[test_handle="form_next_button"]').click()
//         })

//         it("Enter a subject and search tags, then click next", () => {

//             cy.get('[test_handle="subject_input"]').type("React router")
//             cy.get('[test_handle="search_tags_input"]').type("Routing")
//             cy.get('[test_handle="form_next_button"]').click()

//         })

//         it("Submit the form without entering syntax - should display the note", () => {

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="note_container"]').should("be.visible")

//             cy.get('[test_handle="form_reset_button"]').click()

//         })

//     })

//     context("Adding a new note - No search tags, subject, but with syntax", () => {

//         it("Complete form up until the optionals part", () => {

//             // cy.get('[test_handle="add_new_note_button"]').click()

//             cy.get('[test_handle="title_input"]').type("Redux setup")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="body_input"]').type("Install and import the modules, then wrap the provider in a")

//             cy.get('[test_handle="form_next_button"]').click()
//         })

//         it("Skip the search tags and subject, then click next", () => {

//             cy.get('[test_handle="form_next_button"]').click()

//         })

//         it("Submit the form after entering syntax - should display the note", () => {

//             cy.get('[test_handle="syntax_input"]').type("const [state, set_state] = (null)").type("{enter}Const var = 'variable'").type("{enter}Const var2 = 'variable2'")

//             cy.get('[test_handle="form_next_button"]').click()

//             cy.get('[test_handle="note_container"]').should("be.visible")

//             cy.get('[test_handle="form_reset_button"]').click()

//         })

//     })

// })