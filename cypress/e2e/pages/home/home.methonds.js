import {HomeElements} from "./home.elements";

export class HomeMethonds{
   static clickOnPhone(){
       HomeElements.categoriesMenu.phone().click()
    }
   static clickOnLaptop(){
      HomeElements.categoriesMenu.laptop().click()
   }
   static clickOnMonitor(){
      HomeElements.categoriesMenu.monitor().click()
   }
   static clickOnProduct(product){
      HomeElements.productName(product).click()
   }
   static verificProductName(productName){
      HomeElements.productName(productName).should('be.visible')
   }
   static verifyUrlHomePage(){
      cy.url().should('include','index.html')
   }
}
