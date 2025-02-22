import {CommonPageData} from "../pages/commun-page/common-page.data";
import {Logger} from "../util/logger";
import {CommonPageMethonds} from "../pages/commun-page/common-page.methonds";
import {SignUpMethonds} from "../pages/signUp/signUp.methonds";

describe(CommonPageData.testSuit.registrationAuthentication,() =>{
   it('Registro de usuario válido', ()=>{
      Logger.stepNumber(1)
      Logger.step('Navegar a la página de inicio')
      CommonPageData.url

      Logger.stepNumber(2)
      Logger.step('Hacer clic en "Sign up" en la barra de navegación')
      CommonPageMethonds.clickSingUpOptions()

      Logger.stepNumber(3)
      Logger.step('Completar todos los campos obligatorios con información válida.')
      SignUpMethonds.insertUsername('prueba1')
      SignUpMethonds.insertPassword('prueba1')

      Logger.stepNumber(4)
      Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
      SignUpMethonds.clickOnSignUpButton()
      Logger.verification('Verificar que se muestre el mensaje')
      SignUpMethonds.verifyThatUserWasAdded('Sign up successful.')

   })
})
