import {CartElement} from "./cart.element";

export class CartMethonds{
   static clickDeleteLink(productName){
      CartElement.link.delete(productName).click()
    }
    static verifyProductAdded(productName){
       CartElement.link.delete(productName).should('be.visible')
    }
    static verifyUrl(){
      cy.url().should('include', 'cart.html')
    }
    static clickOnPlaceOrderButton(){
      CartElement.buttonPlaceOrder.click()
    }
}
