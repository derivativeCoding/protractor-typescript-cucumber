@Add1Item
Feature: Add an Item in Cart

Background: Load application url
Given load application url

Scenario:Add an item to cart
 When enter "<search_str>" in search bar and click on search
 And click on list view
 And add first item to cart
 Then "Product successfully added to your shopping cart" is displayed
 And "Proceed to checkout" button is displayed

 Examples:
 |search_str|
 |Dress|
 |T-shirt|