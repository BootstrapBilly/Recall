// describe("@@@@@ LOGIN @@@@@", () => {

//     it("Visit the homepage", () => cy.visit("https://localhost:3000"))

//     it("Click the login text - form should slide in", () => {

//         cy.get('[test_handle="login_text"]').click({ force: true })

//         cy.get('[test_handle="form_email_input"]').should("be.visible")
//         cy.get('[test_handle="form_password_input"]').should("be.visible")

//         cy.get('[test_handle="login_button"]').should("not.be.visible")

//     })

//     it("Click signup text - form should slide back up", () => {

//         cy.get('[test_handle="signup_text"]').click({ force: true })

//         cy.get('[test_handle="signup_button"]').should("be.visible")

//     })

//     it("Click signup button - form should slide down into the signup form", () => {

//         cy.get('[test_handle="signup_button"]').click()

//         cy.get('[test_handle="form_email_input"]').should("be.visible")

//     })

//     it("Fill in email, then click login text - form should transform into a login with value kept", () => {

//         cy.get('[test_handle="form_email_input"]').click().type("billy")

//         cy.get('[test_handle="login_text"]').click({ force: true })

//         cy.get('[test_handle="form_email_input"]').should("have.value", "billy")
//     })

// })