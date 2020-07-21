// describe("@@@@@ UPDATE NOTE @@@@@", () => {

//     it("Visit the add new page", () => cy.visit("https://localhost:3000/add_new"))

//     it("Navigate to the view all page", () => {

//         cy.get('[test_handle="menu_toggle"]').click({force: true})

//         cy.get('[test_handle="view_all_nav_square"]').click({force: true})

//     })

//     context("Single field updates", () => {

//         it("Update only the title", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_title"]').eq(0).click({force: true}).type("Change")

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="note_title"]').eq(0).should("have.value", "A notechange")

//         })

//         it("Update only the subject (Missing subject)", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_subject"]').eq(0).click({force: true}).type("Change")

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="note_subject"]').eq(0).should("have.value", "Change")

//         })

//         it("Update only the subject (Subject set)", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_subject"]').eq(0).click({force: true}).type("Change")

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="note_subject"]').eq(0).should("have.value", "Changechange")

//         })

//         it("Update only the body", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_body_input"]').eq(0).click({force: true}).type("Change")

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="note_body_input"]').eq(0).should("have.value", "A bodyChange")

//         })

//         it("Reset fields to default", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_title"]').eq(0).clear({force: true}).type("A note")
//             cy.get('[test_handle="note_subject"]').eq(0).clear({force: true}).type("No subject")
//             cy.get('[test_handle="note_body_input"]').eq(0).clear({force: true}).type("A body")

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//         })

//     })

//     context("Multiple field updates", () => {

//         it("Update the title and subject - on the second note", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(3).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_title"]').eq(3).click({force: true}).type("Change")

//             cy.get('[test_handle="note_subject"]').eq(3).clear({force: true}).click({force: true}).type("Change")

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="note_subject"]').eq(3).should("have.value", "Change")

//             cy.get('[test_handle="note_title"]').eq(3).should("have.value", "Another notechange")


//         })

//         it("Update the title and body - on the second note", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_title"]').eq(3).click({force: true}).type("Change")

//             cy.get('[test_handle="note_body_input"]').eq(0).clear({force: true}).click({force: true}).type("Change")

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="note_body_input"]').eq(0).should("have.value", "Change")

//             cy.get('[test_handle="note_title"]').eq(3).should("have.value", "Another notechangechange")

//         })

//         it("Reset fields to default", () => {

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_title"]').eq(3).clear({force: true}).type("Another note")
//             cy.get('[test_handle="note_subject"]').eq(3).clear({force: true}).type("Another subject")
//             cy.get('[test_handle="note_body_input"]').eq(0).clear({force: true}).type("Another body")

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="note_toggle_icon"]').eq(3).click({force: true})

//         })

//      })

//     context("Search tag testing", () => {

//         it("Add a tag to a note which has no tags, then cancel it - should not render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("test")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_cancel_button"]').click({force: true})

//             cy.get('[test_handle="TEST"]').should("not.be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//         })

//         it("Add a tag to a note which has some tags, then cancel it - should not render it and other tags should be rendered", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("test")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_cancel_button"]').click({force: true})

//             cy.get('[test_handle="API"]').should("be.visible")
//             cy.get('[test_handle="BOILERPLATE"]').should("be.visible")

//             cy.get('[test_handle="TEST"]').should("not.be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click({force: true})
//         })


//         it("Delete a tag, leaving none left then cancel it - should still be rendered", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(4).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="ROUTING"]').click({force: true})

//             cy.get('[test_handle="ROUTING"]').should("not.be.visible")

//             cy.get('[test_handle="note_cancel_button"]').click({force: true})

//             cy.get('[test_handle="ROUTING"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(4).click({force: true})

//         })

//         it("Delete a tag, leaving some left then cancel it - should still be rendered", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="API"]').click({force: true})

//             cy.get('[test_handle="API"]').should("not.be.visible")

//             cy.get('[test_handle="note_cancel_button"]').click({force: true})

//             cy.get('[test_handle="API"]').should("be.visible")

//             cy.get('[test_handle="BOILERPLATE"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click({force: true})

//         })


//         it("Add a tag to a note which has no tags, then delete it and save - should not render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("test")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="TEST"]').click({force: true})

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="TEST"]').should("not.be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//         })

//         it("Try to add a duplicate search tag - should not render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("API")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="API"]').its("length").should("eq", 1)

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("BOILERPLATE")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="BOILERPLATE"]').its("length").should("eq", 1)

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="note_toggle_icon"]').eq(1).click({force: true})

//         })


//         it("Add a tag to a note which has no tags, then save - should render it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("test")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="TEST"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//         })

//         it("Add multiple tags to a note which has no tags, then save - should render them", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(3).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("TEST")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("ANOTHER")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="TEST"]').should("be.visible")
//             cy.get('[test_handle="ANOTHER"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(3).click({force: true})

//         })

        
//         it("Add multiple tags to a note which was no tags, then save - should render them", () => {

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("MORE")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("TEST")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_save_button"]').eq(0).click()

//             cy.get('[test_handle="TEST"]').should("be.visible")
//             cy.get('[test_handle="MORE"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//         })
        
//         it("Add multiple tags to a note which has some tags, then save - should render them", () => {

//             cy.wait(1000)

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("EVEN")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="search_tag_input"]').eq(0).click({force: true}).type("MOAR")

//             cy.get('[test_handle="add_tag_button"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_save_button"]').click({force: true})

//             cy.get('[test_handle="TEST"]').should("be.visible")
//             cy.get('[test_handle="MORE"]').should("be.visible")
//             cy.get('[test_handle="EVEN"]').should("be.visible")
//             cy.get('[test_handle="MOAR"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//         })

//     })

//     context("Clear added tags", ()=>{

//         it("Remove all the added tags", () => {

//             cy.wait(1000)
//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})
//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})
//             cy.get('[test_handle="TEST"]').click()
//             cy.get('[test_handle="MORE"]').click()
//             cy.get('[test_handle="note_save_button"]').click({force: true})
//             cy.get('[test_handle="TEST"]').should("not.be.visible")
//             cy.get('[test_handle="MORE"]').should("not.be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').eq(0).click({force: true})

//             cy.get('[test_handle="note_toggle_icon"]').eq(3).click({force: true})
//             cy.get('[test_handle="note_edit_button"]').eq(0).click({force: true})
//             cy.get('[test_handle="TEST"]').click()
//             cy.get('[test_handle="ANOTHER"]').click({force: true})
//             cy.get('[test_handle="note_save_button"]').click({force: true})
//             cy.get('[test_handle="TEST"]').should("not.be.visible")
//             cy.get('[test_handle="ANOTHER"]').should("not.be.visible")
//             cy.get('[test_handle="note_toggle_icon"]').eq(3).click({force: true})

//         })
//     })

// })