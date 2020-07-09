// describe("@@@@@ NOTE MOVING PARTS @@@@@", () => {

//     it("Visit the add new page", () => cy.visit("https://localhost:3000/add_new"))

//     it("Navigate to the view all page", () => {

//         cy.get('[test_handle="menu_toggle"]').click()

//         cy.get('[test_handle="view_all_nav_square"]').click()

//     })

//     // context("Check the moving parts", () => {

//     //     it("Click the icon - should expand the box and autofocus it", () => {

//     //         cy.get('[test_handle="search_input"]').should("not.be.visible")

//     //         cy.get('[test_handle="search_bar_icon"]').click()

//     //         cy.get('[test_handle="search_input"]').should("be.visible")
//     //         cy.get('[test_handle="search_input"]').should("be.focused")

//     //     })

//     //     it("Click somewhere else to blur the input - should collapse the search bar", () => {

//     //         cy.get('body').click()

//     //         cy.get('[test_handle="search_input"]').should("not.be.visible")
//     //     })

//     //     it("Open it again, type something then collapse and re-open it - input should be gone", () => {

//     //         cy.get('[test_handle="search_bar_icon"]').click()

//     //         cy.get('[test_handle="search_input"]').type("Something")

//     //         cy.get('body').click()

//     //         cy.get('[test_handle="search_bar_icon"]').click()

//     //         cy.get('[test_handle="search_input"]').should("have.value", "")


//     //     })

//     // })

//     context("Check the functionality of it", () => {

//         it("Type 'A note' (full title) - should display one note", () => {

//             cy.get('[test_handle="search_bar_icon"]').click()

//             cy.get('[test_handle="search_input"]').type("A note")

//             cy.get('[test_handle="note_container"]').should("have.length", 1)

//         })

//         it("Backspace all the way to 'A' - 5 notes should be visible", () => {

//             cy.get('[test_handle="search_input"]').type("{backspace}{backspace}{backspace}{backspace}{backspace}")
//             cy.get('[test_handle="note_container"]').should("have.length", 5)
//         })

//         it("Clear the input then type 'b' - 4 notes should be visible", () => {

//             cy.get('[test_handle="search_input"]').type("{backspace}b")
//             cy.get('[test_handle="note_container"]').should("have.length", 4)

//         })

//         it("Click the body to blur the input - 5 notes should be visible", () => {

//             cy.get('body').click()
//             cy.get('[test_handle="note_container"]').should("have.length", 5)

//         })

//     })

// })