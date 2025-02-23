import {CartElement} from "./cart.element";

export class CartMethonds{
   static clickDeleteLink(productName){
      CartElement.link.delete(productName).click()
    }
    static verifyProductAdded(productName){
       CartElement.link.delete(productName).should('be.visible')
    }
}
