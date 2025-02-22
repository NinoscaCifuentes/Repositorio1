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
}
