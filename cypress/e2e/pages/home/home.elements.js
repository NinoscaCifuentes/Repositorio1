export class HomeElements{
   static get searchField(){
        return cy.get('#search_query_top')
    }
    static productName(product){
        return cy.contains('a' ,product)
    }
    static get categoriesMenu(){
        return{
           phone(){
              return cy.contains('a', 'Phones')
           },
           laptop(){
              return cy.contains('a', 'Laptops')
           },
           monitor(){
              return cy.contains('a', 'Monitors')
           }
        }
    }
}
