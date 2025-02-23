export class ProductElement{
 static get button(){
    return {
       get addToCart (){
          return cy.contains('a', 'Add to cart')
       }
    }
 }
}
