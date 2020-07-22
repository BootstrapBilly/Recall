// describe("@@@@@ NAVIGATION @@@@@", () => {

//     context("Testing the drawer's sliding animations",()=>{

//         it("Click menu toggle - nav should slide out", () => {

//             cy.get('[test_handle="nav_menu_container"]').should("not.be.visible")
    
//             cy.get('[test_handle="menu_toggle"]').click({force:true})
    
//             cy.get('[test_handle="nav_menu_container"]').should("be.visible")
    
//         })
    
//         it("Click menu toggle again - nav should slide back in", () => {
    
//             cy.get('[test_handle="menu_toggle"]').click({force:true})
    
//             cy.get('[test_handle="menu_toggle"]').click({force:true})
    
//         })
    
//         it("Click a link which leads to the same page (dashboard) - Nav menu should slide in", () => {
    
//             cy.get('[test_handle="dashboard_nav_square"]').click({force:true})
    
//             cy.url().should('include', '/dashboard') 
    
//         })
//     })

//     context("Testing the link routing to different pages",()=>{

//         it("Click the add new link - Should navigate to page and hide the menu", () => {

//             cy.get('[test_handle="menu_toggle"]').click({force:true})
    
//             cy.get('[test_handle="add_new_nav_square"]').click({force:true})
    
//             cy.url().should('include', '/add_new') 
    
//         })

//         it("Click the notes link - Should navigate to page and hide the menu", () => {

//             cy.get('[test_handle="menu_toggle"]').click({force:true})
    
//             cy.get('[test_handle="view_all_nav_square"]').click({force:true})
    
//             cy.url().should('include', '/view_all') 
    
//         })

//         it("Click the combine notes link - Should navigate to page and hide the menu", () => {

//             cy.get('[test_handle="menu_toggle"]').click({force:true})
    
//             cy.get('[test_handle="combine_notes_nav_square"]').click({force:true})
    
//             cy.url().should('include', '/combine_notes') 
    
//         })

//         it("Click the friends link - Should navigate to page and hide the menu", () => {

//             cy.get('[test_handle="menu_toggle"]').click({force:true})
    
//             cy.get('[test_handle="friends_nav_square"]').click({force:true})
    
//             cy.url().should('include', '/friends') 
    
//         })

//         it("Click the account link - Should navigate to page and hide the menu", () => {

//             cy.get('[test_handle="menu_toggle"]').click({force:true})
    
//             cy.get('[test_handle="account_nav_square"]').click({force:true})
    
//             cy.url().should('include', '/account') 
    
//         })


//     })

// })