export class SignUpElements{
   static get textBoxess(){
		return{
			get username(){
				return cy.get('input#sign-username')
			},
			get password(){
				return cy.get('input#sign-password')
			}
		}

   }
   static get buttons(){
      return{
         get signUp(){
            return cy.contains('button', 'Sign up')
         }
      }
   }
}
