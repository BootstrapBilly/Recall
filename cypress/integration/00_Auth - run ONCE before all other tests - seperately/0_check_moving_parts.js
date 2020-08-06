// describe("@@@@@ AUTH PAGE @@@@@", () => {

//     it("Visit the homepage", () => cy.visit("https://localhost:3000"))

//     context("Navigating to and from the landing/login page", () => {

//         it("Clicking the find out more button leads to the signup/login form", () => {

//             cy.get('[test_handle="note_container"]').should("be.visible")

//             cy.get('[test_handle="CTA_button"]').click()

//             cy.get('[test_handle="note_container"]').should("not.be.visible")

//             cy.get('[test_handle="action_button"]').should("be.visible")
//         })

//         it("Clicking the back button leads to the landing page", () => {

//             cy.get('[test_handle="back_arrow_button"]').click()

//             cy.get('[test_handle="note_container"]').should("be.visible")

//             cy.get('[test_handle="action_button"]').should("not.be.visible")
//         })

//     })

//     context("Testing the note on the landing page", () => {

//         it("It expands and collapses", () => {

//             cy.get('[test_handle="note_body_input"]').should("not.be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').click()

//             cy.get('[test_handle="note_body_input"]').should("be.visible")

//             cy.get('[test_handle="note_toggle_icon"]').click()

//             cy.get('[test_handle="note_body_input"]').should("not.be.visible")

//         })

//         it("Deleting the note shows an alert and doesn't delete it", () => {

//             cy.get('[test_handle="note_toggle_icon"]').click()

//             cy.get('[test_handle="note_delete_button"]').click()

//             cy.get('[test_handle="confirm_delete"]').click()

//             cy.get('[id="easy-alert"]').should("be.visible")

//         })

//         it("The note can be modified", () => {

//             cy.get('[test_handle="note_edit_button"]').click()

//             cy.get('[test_handle="note_title"]').clear().type("New title")

//             cy.get('[test_handle="note_subject"]').clear().type("New subject")

//             cy.get('[test_handle="note_body_input"]').clear().type("A body")

//             cy.get('[test_handle="LOOPS"]').click()

//             cy.get('[test_handle="search_tag_input"]').click().type("tag")

//             cy.get('[test_handle="add_tag_button"]').click()

//             cy.get('[test_handle="syntax_copy_button"]').click()

//             cy.get('[test_handle="syntax_box"]').clear().type("Some syntax")

//             cy.get('[test_handle="syntax_save_button"]').click()

//             cy.get('[test_handle="note_save_button"]').click()

//             cy.get('[test_handle="note_title"]').should("have.value", "New title")
//             cy.get('[test_handle="note_subject"]').should("have.value", "New subject")
//             cy.get('[test_handle="note_body_input"]').should("have.value", "A body")
//             cy.get('[test_handle="LOOPS"]').should("not.be.visible")
//             cy.get('[test_handle="TAG"]').should("be.visible")

//             cy.get('[test_handle="note_edit_button"]').click()
//             cy.get('[test_handle="syntax_copy_button"]').click()

//             cy.get('[test_handle="syntax_box"]').should("have.value", "Some syntax")
//             cy.get('[test_handle="syntax_save_button"]').click()

//             cy.get('[test_handle="note_save_button"]').click()

//         })

//     })

//     context("Testing the form on the login page", () => {

//         it("Signup form is rendered initially", ()=> {

//             cy.get('[test_handle="CTA_button"]').click()

//             cy.get('[test_handle="form_type"]').should("have.text", "Signup")

//             cy.get('[test_handle="email_or_username_input"]').should("be.visible")
//             cy.get('[test_handle="username_input"]').should("be.visible")
//             cy.get('[test_handle="password_input"]').should("be.visible")
//             cy.get('[test_handle="repeat_password_input"]').should("be.visible")

//         })

//         it("Toggling the form works", ()=> {

//             cy.get('[test_handle="switch_form_type_text"]').click()

//             cy.get('[test_handle="form_type"]').should("have.text", "Login")

//             cy.get('[test_handle="email_or_username_input"]').should("be.visible")
//             cy.get('[test_handle="username_input"]').should("not.be.visible")
//             cy.get('[test_handle="password_input"]').should("be.visible")
//             cy.get('[test_handle="repeat_password_input"]').should("not.be.visible")

//         })

//         it("Password recovery toggle works", ()=> {

//             cy.get('[test_handle="forgot_password"]').click()

//             cy.get('[test_handle="form_type"]').should("have.text", "Recover password")

//             cy.get('[test_handle="email_or_username_input"]').should("not.be.visible")
//             cy.get('[test_handle="username_input"]').should("not.be.visible")
//             cy.get('[test_handle="password_input"]').should("not.be.visible")
//             cy.get('[test_handle="repeat_password_input"]').should("not.be.visible")

//             cy.get('[test_handle="recover_password_email_input"]').should("be.visible")

//         })

        
//         it("Toggling back to login works", ()=> {

//             cy.get('[test_handle="switch_form_type_text"]').click()

//             cy.get('[test_handle="form_type"]').should("have.text", "Login")

//             cy.get('[test_handle="recover_password_email_input"]').should("not.be.visible")

//             cy.get('[test_handle="email_or_username_input"]').should("be.visible")
//             cy.get('[test_handle="username_input"]').should("not.be.visible")
//             cy.get('[test_handle="password_input"]').should("be.visible")
//             cy.get('[test_handle="repeat_password_input"]').should("not.be.visible")

//         })

//     })

// })