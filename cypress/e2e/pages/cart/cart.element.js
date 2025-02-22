export class CartElement{
   static get buttonPlaceOrder(){
        return cy.get('.btn-success')
    }
    static get link (){
      return {
         delete(productName){
            return cy.contains('td',productName).closest('tr').find('a')
         }
      }
    }
}
