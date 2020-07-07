// describe("@@@@@ UPDATE NOTE @@@@@", () => {

//     it("Visit the add new page", () => cy.visit("https://localhost:3000/add_new"))

//     it("Navigate to the view all page", () => {

//         cy.get('[test_handle="menu_toggle"]').click()

//         cy.get('[test_handle="view_all_nav_square"]').click()

//     })

//     context("Single field updates", () => {

//         it("Update only the title", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_title"]').eq(0).click().type("Change")

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_title"]').eq(0).should("have.value", "A notechange")

//         })

//         it("Update only the subject (Missing subject)", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_subject"]').eq(0).click().type("Change")

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_subject"]').eq(0).should("have.value", "Change")

//         })

//         it("Update only the subject (Subject set)", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_subject"]').eq(0).click().type("Change")

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_subject"]').eq(0).should("have.value", "Changechange")

//         })

//         it("Update only the body", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_body_input"]').eq(0).click().type("Change")

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_body_input"]').eq(0).should("have.value", "A bodyChange")

//         })

//         it("Reset fields to default", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_title"]').eq(0).clear().type("A note")
//             cy.get('[test_handle="note_subject"]').eq(0).clear().type("No subject")
//             cy.get('[test_handle="note_body_input"]').eq(0).clear().type("A body")

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//         })

//     })

//     context("Multiple field updates", () => {

//         it("Update the title and subject - on the second note", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_title"]').eq(1).click().type("Change")

//             cy.get('[test_handle="note_subject"]').eq(1).clear().click().type("Change")

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_subject"]').eq(1).should("have.value", "Change")

//             cy.get('[test_handle="note_title"]').eq(1).should("have.value", "Another notechange")

//         })

//         it("Update the title and body - on the second note", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_title"]').eq(1).click().type("Change")

//             cy.get('[test_handle="note_body_input"]').eq(0).clear().click().type("Change")

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_body_input"]').eq(0).should("have.value", "Change")

//             cy.get('[test_handle="note_title"]').eq(1).should("have.value", "Another notechangechange")

//         })

//         it("Reset fields to default", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="note_title"]').eq(1).clear().type("Another note")
//             cy.get('[test_handle="note_subject"]').eq(1).clear().type("Another subject")
//             cy.get('[test_handle="note_body_input"]').eq(0).clear().type("Another body")

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click()

//         })

//     })

//     context("Search tag testing", () => {

//         it("Add a tag to a note which has no tags, then cancel it - should not render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("test")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="note_cancel_button"]').click()

//             cy.get('[test_handle="TEST"]').should("not.be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//         })

//         it("Add a tag to a note which has some tags, then cancel it - should not render it and other tags should be rendered", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(2).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("test")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="note_cancel_button"]').click()

//             cy.get('[test_handle="API"]').should("be.visible")
//             cy.get('[test_handle="BOILERPLATE"]').should("be.visible")

//             cy.get('[test_handle="TEST"]').should("not.be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(2).click()
//         })


//         it("Delete a tag, leaving none left then cancel it - should still be rendered", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(3).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="ROUTING"]').click()

//             cy.get('[test_handle="ROUTING"]').should("not.be.visible")

//             cy.get('[test_handle="note_cancel_button"]').click()

//             cy.get('[test_handle="ROUTING"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(3).click()

//         })

//         it("Delete a tag, leaving some left then cancel it - should still be rendered", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(2).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="API"]').click()

//             cy.get('[test_handle="API"]').should("not.be.visible")

//             cy.get('[test_handle="note_cancel_button"]').click()

//             cy.get('[test_handle="API"]').should("be.visible")

//             cy.get('[test_handle="BOILERPLATE"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(2).click()

//         })


//         it("Add a tag to a note which has no tags, then delete it and save - should not render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("test")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="TEST"]').click()

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="TEST"]').should("not.be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//         })

//         it("Try to add a duplicate search tag - should not render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(2).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("API")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="API"]').its("length").should("eq", 1)

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("BOILERPLATE")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="BOILERPLATE"]').its("length").should("eq", 1)

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_toggle_icon"]').eq(2).click()

//         })


//         it("Add a tag to a note which has no tags, then save - should render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("test")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="TEST"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//         })

//         it("Add multiple tags to a note which has no tags, then save - should render them", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("TEST")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("ANOTHER")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="TEST"]').should("be.visible")
//             cy.get('[test_handle="ANOTHER"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click()

//         })

        
//         it("Add a tag to a note which has some tags, then save - should render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("more")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="TEST"]').should("be.visible")
//             cy.get('[test_handle="MORE"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//         })
        
//         it("Add multiple tags to a note which has some tags, then save - should render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//             cy.get('[test_handle="note_edit_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("even")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="search_tag_input"]').eq(0).click().type("moar")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click()

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="TEST"]').should("be.visible")
//             cy.get('[test_handle="MORE"]').should("be.visible")
//             cy.get('[test_handle="EVEN"]').should("be.visible")
//             cy.get('[test_handle="MOAR"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//         })

//         it("Remove all the added tags", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()
//             cy.get('[test_handle="note_edit_button"]').eq(0).click()
//             cy.get('[test_handle="TEST"]').click()
//             cy.get('[test_handle="MORE"]').click()
//             cy.get('[test_handle="EVEN"]').click()
//             cy.get('[test_handle="MOAR"]').click()
//             cy.get('[test_handle="note_save_button"]').click()
//             cy.get('[test_handle="TEST"]').should("not.be.visible")
//             cy.get('[test_handle="MORE"]').should("not.be.visible")
//             cy.get('[test_handle="EVEN"]').should("not.be.visible")
//             cy.get('[test_handle="MOAR"]').should("not.be.visible")
//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click()

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click()
//             cy.get('[test_handle="note_edit_button"]').eq(0).click()
//             cy.get('[test_handle="TEST"]').click()
//             cy.get('[test_handle="ANOTHER"]').click()
//             cy.get('[test_handle="note_save_button"]').click()
//             cy.get('[test_handle="TEST"]').should("not.be.visible")
//             cy.get('[test_handle="ANOTHER"]').should("not.be.visible")
//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click()

//         })

//     })

// })