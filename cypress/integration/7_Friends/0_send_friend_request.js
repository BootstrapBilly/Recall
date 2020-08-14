describe("@@@@@ SEND FRIEND REQUEST @@@@@", () => {

    it("Log in with BB", () => {

        cy.get('[test_handle="switch_form_type_text"]').click()
        cy.get('[test_handle="email_or_username_input"]').clear().type("bb")
        cy.get('[test_handle="password_input"]').type("1234567B")
        cy.get('[test_handle="action_button"]').click({force:true})

    })

    it("Navigate to the account management page", () => {

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="friends_nav_square"]').click()

    })

})

context("Test out the moving parts", () => {

    it("Land on the friends page - should be empty and show a picture", () => {

        cy.get('[test_handle="no_friends_prompt"]').should("be.visible")

    })

    it("Click on add new friend - should load the add friend page", () => {

        cy.get('[test_handle="Add New Friend"]').click()

        cy.get('[test_handle="search_input"]').should("be.visible")

    })

    it("Click on friends - should load the friend page", () => {

        cy.get('[test_handle="Friends"]').click()

        cy.get('[test_handle="search_input"]').should("not.be.visible")

        cy.get('[test_handle="no_friends_prompt"]').should("be.visible")

        cy.get('[test_handle="user_card"]').should("have.length", 0)

    })

})

context("Adding a friend/checking pending requests do not show up in the search results", () => {

    it("Checking the current user is not included in the search results", () => {

        cy.get('[test_handle="Add New Friend"]').click()

        cy.get('[test_handle="search_input"]').click().type("b")

        cy.get('[test_handle="bb"]').should("not.be.visible")

    })

    it("Add bianca - should redirect and show as pending", () => {

        cy.get('[test_handle="bianca"]').click()

        cy.get('[test_handle="search_input"]').should("not.be.visible")

        cy.get('[test_handle="bianca"]').should("be.visible")

    })

    
    it("Login with bianca, to check the request is showing up from bb", () => {

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="logout_button"]').click()

        cy.get('[test_handle="CTA_button"]').click()

        cy.get('[test_handle="switch_form_type_text"]').click()

        cy.get('[test_handle="email_or_username_input"]').type("bianca")

        cy.get('[test_handle="password_input"]').type("1234567B")

        cy.get('[test_handle="action_button"]').click({force:true})

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="friends_nav_square"]').click()

        cy.get('[test_handle="bb"]').should("be.visible")

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="logout_button"]').click()

        //note that the user id is hardcoded into local storage for testing purposes, do not delete test@test.com (1st record in the users collection otherwise this will not work) - add note line 3

    })

    
    it("Log back in with bb", () => {

        cy.get('[test_handle="CTA_button"]').click()

        cy.get('[test_handle="switch_form_type_text"]').click()

        cy.get('[test_handle="email_or_username_input"]').type("bb")

        cy.get('[test_handle="password_input"]').type("1234567B")

        cy.get('[test_handle="action_button"]').click({force:true})

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="friends_nav_square"]').click()

    })

    it("Search for 'b' again, now bb and bianca should not show", () => {

        cy.get('[test_handle="Add New Friend"]').click()

        cy.get('[test_handle="search_input"]').click().type("b")

        cy.get('[test_handle="bb"]').should("not.be.visible")
        cy.get('[test_handle="bianca"]').should("not.be.visible")

    })

})


context("Cancelling a friend request", () => {

    it("Cancel the friend request from bb to bianca", () => {

        cy.get('[test_handle="Friends"]').click()

        cy.get('[test_handle="bianca"]').should("be.visible")

        cy.get('[test_handle="bianca"]').click()

        cy.get('[test_handle="Cancel_request_button"]').click()

        cy.get('[test_handle="bianca"]').should("not.be.visible")

        cy.get('[test_handle="no_friends_prompt"]').should("be.visible")

    })

        
    it("Login back in with bianca to check that the request is gone", () => {

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="logout_button"]').click()

        cy.get('[test_handle="CTA_button"]').click()

        cy.get('[test_handle="switch_form_type_text"]').click()

        cy.get('[test_handle="email_or_username_input"]').type("bianca")

        cy.get('[test_handle="password_input"]').type("1234567B")

        cy.get('[test_handle="action_button"]').click({force:true})

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="friends_nav_square"]').click()

        cy.get('[test_handle="bb"]').should("not.be.visible")

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="logout_button"]').click()

        //note that the user id is hardcoded into local storage for testing purposes, do not delete test@test.com (1st record in the users collection otherwise this will not work) - add note line 3

    })

    it("Log back in with bb", () => {

        cy.get('[test_handle="CTA_button"]').click()

        cy.get('[test_handle="switch_form_type_text"]').click()

        cy.get('[test_handle="email_or_username_input"]').type("bb")

        cy.get('[test_handle="password_input"]').type("1234567B")

        cy.get('[test_handle="action_button"]').click({force:true})

        cy.get('[test_handle="menu_toggle"]').click()

        cy.get('[test_handle="friends_nav_square"]').click()

    })

})
