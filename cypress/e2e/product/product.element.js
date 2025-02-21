export class ProductElement{
 static get button(){
    return {
       get AddToCart (){
          return cy.contains('a', 'Add to cart')
       }
    }
 }
}
