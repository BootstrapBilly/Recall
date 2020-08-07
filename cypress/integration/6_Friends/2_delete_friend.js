// describe("@@@@@ DELETE FRIEND @@@@@", () => {

//     context("Check that removing a friend works - friend should disappear", () => {

//         it("Log back in with berny", () => {

//             cy.get('[test_handle="CTA_button"]').click()
    
//             cy.get('[test_handle="switch_form_type_text"]').click()
    
//             cy.get('[test_handle="email_or_username_input"]').type("berny")
    
//             cy.get('[test_handle="password_input"]').type("1234567B")
    
//             cy.get('[test_handle="action_button"]').click({force:true})
    
//             cy.get('[test_handle="menu_toggle"]').click()
    
//             cy.get('[test_handle="friends_nav_square"]').click()
    
//         })

//         it("Delete belinda - she should disappear ", () => {

//             cy.get('[test_handle="belinda"]').click()
    
//             cy.get('[test_handle="Delete_friend_button"]').click()

//             cy.get('[test_handle="belinda"]').should("not.be.visible")
    
//         })

//         it("Delete bb - he should disappear ", () => {

//             cy.get('[test_handle="bb"]').click()
    
//             cy.get('[test_handle="Delete_friend_button"]').click()

//             cy.get('[test_handle="bb"]').should("not.be.visible")
    
//         })

//         it("Login with belinda to make sure berny is no longer her friend", () => {

//             cy.get('[test_handle="menu_toggle"]').click()

//             cy.get('[test_handle="logout_button"]').click()

//             cy.get('[test_handle="CTA_button"]').click()

//             cy.get('[test_handle="switch_form_type_text"]').click()

//             cy.get('[test_handle="email_or_username_input"]').type("belinda")

//             cy.get('[test_handle="password_input"]').type("1234567B")

//             cy.get('[test_handle="action_button"]').click({ force: true })

//             cy.get('[test_handle="menu_toggle"]').click()

//             cy.get('[test_handle="friends_nav_square"]').click()

//             cy.get('[test_handle="berny"]').should("not.be.visible")

//             cy.get('[test_handle="menu_toggle"]').click()

//             cy.get('[test_handle="logout_button"]').click()

//             //note that the user id is hardcoded into local storage for testing purposes, do not delete test@test.com (1st record in the users collection otherwise this will not work) - add note line 3

//         }) 

//     })
// })