export class CartElement{
   static get buttonPlaceOrder(){
        return cy.get('.btn-success')
    }
    static get link (){
      return {
         delete(productName){
            return cy.contains('a', 'Delete').eq(0)

         }
      }
    }
}
