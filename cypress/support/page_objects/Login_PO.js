/// <reference types="cypress" />
import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
  navigateTo_Login_Page() {
    super.navigate("");
  } 
  elements= {
    usernameField:'#username',
    passwordField:'#password',
    loginButton:'#log-in',

  }

  type_Username_Password(userName, password) {
    cy.get(this.elements.usernameField).type(userName);
    cy.get(this.elements.passwordField).type(password);
    cy.get(this.elements.loginButton).click();
  }

  confirm_Balance(amount) {
    cy.get(".balance-value")
      .parents('[class="element-balances"]')
      .find('[class="balance hidden-mobile"]')
      .should("contain", amount);
  }

  status_Of_Transcation(description, status) {
    cy.contains(description)
      .parent("td")
      .parent("tr")
      .within(() => {
        cy.get("td").children().should("contain",description);
        cy.get("td").eq(0).should("contain", status);
        
      });
  }
}
export default Login_PO;
