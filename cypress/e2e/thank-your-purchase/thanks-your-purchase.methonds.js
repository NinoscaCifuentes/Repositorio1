import {ThankYourPurchaseElement} from "./thank-your-purchase.element";

export class ThanksYourPurchaseMethonds {
   static clickOnButtonOk() {
      ThankYourPurchaseElement.buttons.ok.click()
   }

   static validateGreenCheckIconIsVisible() {
      ThankYourPurchaseElement.icons.greenCheck.should('exist')
   }
}
