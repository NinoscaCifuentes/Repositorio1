export class ThankYourPurchaseElement{
   static get buttons (){
      return{
        get ok (){
           return cy.contains('button', 'OK')
        }
      }
   }
   static get icons (){
      return{
        get greenCheck (){
           return  cy.get('div.sa-placeholder')

        }
      }
   }
}
