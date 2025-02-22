import {CommonPageData} from "./common-page.data";
import {CommonPageElement} from "./common-page.element";


export class CommonPageMethonds {
    static navigateDemoPlace(){
        cy.visit(CommonPageData.url)
    }
    static clickHomeOptions(){
       CommonPageElement.topMenu.home.click()
    }
   static clickContactOptions(){
      CommonPageElement.topMenu.contact.click()
   }
   static clickAboutUsOptions(){
      CommonPageElement.topMenu.aboutUs.click()
   }
   static clickCartOptions(){
      CommonPageElement.topMenu.cart.click()
   }
   static clickLoginOptions(){
      CommonPageElement.topMenu.login.click()
   }
   static clickSingUpOptions(){
      CommonPageElement.topMenu.singUp.click()
   }
   static verificAlertMessage(message){
      cy.on('window:alert', (str) => {
         expect(str).to.equal(message)
      })
   }
   static generateRandomString(length= 10) {
      let result = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
}
