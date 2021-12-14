@InvalidSignIn
Feature: SignIn Page - Invalid Email ID

Background: Load application url
Given load application url

Scenario: Invalid Email ID Error msg
 When click on sign in link
 And enter invalid email address in the email box and click enter
 Then error message "Invalid email address." is displayed


# 1. Open link http://automationpractice.com/index.php
# 2. Login to the website.
# 3. Move your cursor over Women's link.
# 4. Click on sub menu 'T-shirts'.
# 5. Mouse hover on the second product displayed.
# 6. 'More' button will be displayed, click on 'More' button.
# 7. Increase quantity to 2.
# 8. Select size 'L'
# 9. Select color.
# 10. Click 'Add to Cart' button.
# 11. Click 'Proceed to checkout' button.
# 12. Complete the buy order process till payment.
# 13. Make sure that Product is ordered.

