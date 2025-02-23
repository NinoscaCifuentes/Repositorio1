export class CommonPageElement {
  static get topMenu(){
      return {
   get home (){
      return cy.contains('a', 'Home')
   },
   get contact (){
      return cy.contains('a', 'Contact')
   },
   get aboutUs (){
      return cy.contains('a', 'About us')
   },
   get cart (){
      return cy.contains('a', 'Cart')
   },
   get login (){
      return cy.contains('a', 'Log in')
   },
   get logout (){
      return cy.contains('a', 'Log out')
   },
   get singUp (){
      return cy.contains('a', 'Sign up')
   },
     }
  }
  static get loggedInUser(){
      return {
         get welcome (){
            return  cy.get('a#nameofuser')
         }
      }
  }
}
