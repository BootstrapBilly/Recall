// describe("@@@@@ NOTE MOVING PARTS @@@@@", () => {

//     it("Visit the add new page", () => cy.visit("https://localhost:3000/add_new"))

//     it("Navigate to the view all page", () => {

//         cy.get('[test_handle="menu_toggle"]').click()

//         cy.get('[test_handle="view_all_nav_square"]').click()

//     })

//     context("Checking the UI reactions to expanding", () => {

//         it("Expand the note - body should be visible", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//             cy.get('[test_handle="note_body_wrapper"]').should("be.visible")

//         })

//         it("Click the edit button - Note should change to edit mode", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_save_button"]').should("be.visible")

//         })

//     })

//     context("Checking the inputs being sized properly when they are cleared", () => {

//         const start_edit_mode = () => {

//             it("Start edit mode", () => {

//                 cy.get('[test_handle="note_toggle_icon"]').eq(0).click()
//                 cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             })
//         }

//         it("Clear the title- Input should be the right size", () => {

//             start_edit_mode()

//             cy.get('[test_handle="note_title"]').eq(0).click({force: true}).type("{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")

//             cy.get('[test_handle="input_wrapper"]').eq(0).should("have.css", "color", "rgba(0, 0, 0, 0)").should("have.css", "background-color", "rgb(245, 222, 179)").should("have.css", "width", "1px").should("have.css", "height", "22px")

//         })

//         it("Clear the subject- Input should be the right size", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click()
//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_subject"]').eq(1).click().type("{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")

//             cy.get('[test_handle="input_wrapper"]').eq(1).should("have.css", "color", "rgba(0, 0, 0, 0)").should("have.css", "background-color", "rgb(245, 222, 179)").should("have.css", "height", "18px")

//             cy.get('[test_handle="note_cancel_button"]').eq(1).click()
//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click()

//         })

//         it("Clear the body- Input should be the right size", () => {

//             cy.get('[test_handle="note_body_input"]').eq(0).click().type("{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}")

//             cy.get('[test_handle="note_body_input"]').eq(0).should("have.css", "color", "rgb(0, 0, 0)").should("have.css", "background-color", "rgb(245, 222, 179)").should("have.css", "height", "42px")

//         })

//         it("Click a missing subject- 'No title' should be cleared", () => {

//             cy.get('[test_handle="note_subject"]').eq(0).click()

//             cy.get('[test_handle="note_subject"]').should("have.value", "")

//             cy.get('[test_handle="note_body_input"]').eq(0).should("have.css", "color", "rgb(0, 0, 0)").should("have.css", "background-color", "rgb(245, 222, 179)").should("have.css", "height", "42px")

//         })

//     })

//     context("Cancelling edit mode and closing the note", () => {

//         it("Press the cancel button - Should come out of edit mode", () => {

//             cy.get('[test_handle="note_cancel_button"]').eq(0).click()

//             cy.get('[test_handle="note_cancel_button"]').should("not.be.visible")

//             cy.get('[test_handle="note_edit_button"]').should("be.visible")

//         })
        
//         it("Press the toggle button - Should close the note", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//             cy.get('[test_handle="note_body_input"]').should("not.be.visible")

//         })


//     })

// })