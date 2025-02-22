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
}
