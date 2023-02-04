Feature: Login on Amazon Website
    I want to login to Amazon Website

    Background:
        Given I open the Amazon Page
        When I Login with email and password and i hit the sumbit button
        Then I login to amazon website successfully

    Scenario: Add Address

        When I open the "Your Account" Page
        And I click on "Your Address" tab
        And I click on Add Address link
        And I enter address details
            | FullName    | Mobilenumber | PINcode | Flatno | Area         | Landmark   |
            | Deepa Reddy | 8932343434   | 560076  | 219    | Brigade Road | Pantaloons |

        And I click on Add Address button
        Then address is added successfully
            | Landmark   |
            | Pantaloons |
        And I click on delete link
        And confirm delete address
# Then address is removed successfully




