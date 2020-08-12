describe("@@@@@ PROCESS FRIEND REQUEST @@@@@", () => {

    context("Send friend requests to barney on multiple accounts", () => {

        it("Send a friend request to berny, then logout", () => {

            cy.get('[test_handle="Add New Friend"]').click()

            cy.get('[test_handle="search_input"]').click().type("b")

            cy.get('[test_handle="berny"]').click()

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="logout_button"]').click()

        })

        it("Login with belinda, and send a request to berny and logout again", () => {

            cy.get('[test_handle="CTA_button"]').click()

            cy.get('[test_handle="switch_form_type_text"]').click()

            cy.get('[test_handle="email_or_username_input"]').type("belinda")

            cy.get('[test_handle="password_input"]').type("1234567B")

            cy.get('[test_handle="action_button"]').click({ force: true })

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="friends_nav_square"]').click()

            cy.get('[test_handle="Add New Friend"]').click()

            cy.get('[test_handle="search_input"]').click().type("b")

            cy.get('[test_handle="berny"]').click()

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="logout_button"]').click()

            //note that the user id is hardcoded into local storage for testing purposes, do not delete test@test.com (1st record in the users collection otherwise this will not work) - add note line 3

        })

        it("Login with barney, and send a request to berny and logout again", () => {

            cy.get('[test_handle="CTA_button"]').click()

            cy.get('[test_handle="switch_form_type_text"]').click()

            cy.get('[test_handle="email_or_username_input"]').type("barney")

            cy.get('[test_handle="password_input"]').type("1234567B")

            cy.get('[test_handle="action_button"]').click({ force: true })

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="friends_nav_square"]').click()

            cy.get('[test_handle="Add New Friend"]').click()

            cy.get('[test_handle="search_input"]').click().type("b")

            cy.get('[test_handle="berny"]').click()

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="logout_button"]').click()

            //note that the user id is hardcoded into local storage for testing purposes, do not delete test@test.com (1st record in the users collection otherwise this will not work) - add note line 3

        })

    })

    context("Accept and deny the friend requests on barneys account", () => {

        it("Login with berny to process the requests", () => {

            cy.get('[test_handle="CTA_button"]').click()

            cy.get('[test_handle="switch_form_type_text"]').click()

            cy.get('[test_handle="email_or_username_input"]').type("berny")

            cy.get('[test_handle="password_input"]').type("1234567B")

            cy.get('[test_handle="action_button"]').click({ force: true })

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="friends_nav_square"]').click()
        })

        it("Check that users with pending incoming requests do not show up when searching for users", () => {

            cy.get('[test_handle="Add New Friend"]').click()

            cy.get('[test_handle="search_input"]').click().type("b")

            cy.get('[test_handle="bb"]').should("not.be.visible")

            cy.get('[test_handle="belinda"]').should("not.be.visible")

            cy.get('[test_handle="barney"]').should("not.be.visible")

            cy.get('[test_handle="Friends"]').click()

        })

        it("Deny the request from Barney, should show an alert he user card should disappear", () => {

            cy.get('[test_handle="barney"]').click()

            cy.wait(500)

            cy.get('[test_handle="deny_button"]').click()

            cy.get('[id="easy-alert"]').should("be.visible")

            cy.get('[test_handle="barney"]').should("not.be.visible")

        })

        it("Accept the request from Bb, should show an alert and add him to friends", () => {

            cy.wait(500)

            cy.get('[test_handle="bb"]').click()

            cy.get('[test_handle="accept_button"]').click()

            cy.get('[id="easy-alert"]').should("be.visible")

            cy.get('[test_handle="bb"]').should("be.visible")

        })

        it("Accept the request from belina, should show an alert and add her to friends", () => {

            cy.wait(500)

            cy.get('[test_handle="belinda"]').click()

            cy.get('[test_handle="accept_button"]').click()

            cy.get('[id="easy-alert"]').should("be.visible")

            cy.get('[test_handle="belinda"]').should("be.visible")

        })

    })
    
    context("Check that accepted requests show the friend on the other users account", () => {

        it("Login with belinda to make sure berny is her friend", () => {

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="logout_button"]').click()

            cy.get('[test_handle="CTA_button"]').click()

            cy.get('[test_handle="switch_form_type_text"]').click()

            cy.get('[test_handle="email_or_username_input"]').type("belinda")

            cy.get('[test_handle="password_input"]').type("1234567B")

            cy.get('[test_handle="action_button"]').click({ force: true })

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="friends_nav_square"]').click()

            cy.get('[test_handle="berny"]').should("be.visible")

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="logout_button"]').click()

            //note that the user id is hardcoded into local storage for testing purposes, do not delete test@test.com (1st record in the users collection otherwise this will not work) - add note line 3

        }) 

    })

    context("Check that denied requests remove the pending user from the requestee's friends", () => {

        it("Login with barney to make sure berny isnt a friend", () => {

            cy.get('[test_handle="CTA_button"]').click()

            cy.get('[test_handle="switch_form_type_text"]').click()

            cy.get('[test_handle="email_or_username_input"]').type("barney")

            cy.get('[test_handle="password_input"]').type("1234567B")

            cy.get('[test_handle="action_button"]').click({ force: true })

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="friends_nav_square"]').click()

            cy.get('[test_handle="berny"]').should("not.be.visible")

            cy.get('[test_handle="menu_toggle"]').click()

            cy.get('[test_handle="logout_button"]').click()

            //note that the user id is hardcoded into local storage for testing purposes, do not delete test@test.com (1st record in the users collection otherwise this will not work) - add note line 3

        }) 

    })

})


