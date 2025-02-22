import {CommonPageData} from "../pages/commun-page/common-page.data";
import {Logger} from "../util/logger";
import {CommonPageMethonds} from "../pages/commun-page/common-page.methonds";
import {SignUpMethonds} from "../pages/signUp/signUp.methonds";
import {LoginData} from "../pages/login/login.data";
const user= CommonPageMethonds.generateRandomString();
const password= CommonPageMethonds.generateRandomString();


describe(CommonPageData.testSuit.registration,() =>{
   it('Registro de usuario válido', ()=>{
      Logger.stepNumber(1)
      Logger.step('Navegar a la página de inicio')
      CommonPageMethonds.navigateDemoPlace()

      Logger.stepNumber(2)
      Logger.step('Hacer clic en "Sign up" en la barra de navegación')
      CommonPageMethonds.clickSingUpOptions()

      Logger.stepNumber(3)
      Logger.step('Completar todos los campos obligatorios con información válida.')
      SignUpMethonds.insertUsername(user)
      SignUpMethonds.insertPassword(password)

      Logger.stepNumber(4)
      Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
      SignUpMethonds.clickOnSignUpButton()
      Logger.verification('Verificar que se muestre el mensaje')
      SignUpMethonds.verifyThatUserWasAdded('Sign up successful.')

   })
   it('Registro de usuario inválido', ()=>{
      Logger.stepNumber(1)
      Logger.step('Navegar a la página de inicio')
      CommonPageMethonds.navigateDemoPlace()

      Logger.stepNumber(2)
      Logger.step('Hacer clic en "Sign up" en la barra de navegación')
      CommonPageMethonds.clickSingUpOptions()

      Logger.stepNumber(3)
      Logger.step('Completar algunos campos con información inválida')
      SignUpMethonds.insertUsername(LoginData.dataValida.userName)
      SignUpMethonds.insertPassword(LoginData.dataValida.password)

      Logger.stepNumber(4)
      Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
      SignUpMethonds.clickOnSignUpButton()
      Logger.verification('Verificar que se muestra un mensaje de error indicando los campos inválidos.')
      SignUpMethonds.verifyThatUserWasNotAdded()

   })
   it('Registro de usuario inválido', ()=>{
      Logger.stepNumber(1)
      Logger.step('Navegar a la página de inicio')
      CommonPageMethonds.navigateDemoPlace()

      Logger.stepNumber(2)
      Logger.step('Hacer clic en "Sign up" en la barra de navegación')
      CommonPageMethonds.clickSingUpOptions()

      Logger.stepNumber(3)
      Logger.step('Completar algunos campos con información inválida')
      SignUpMethonds.insertUsername(LoginData.dataValida.userName)
      SignUpMethonds.insertPassword(LoginData.dataValida.password)

      Logger.stepNumber(4)
      Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
      SignUpMethonds.clickOnSignUpButton()
      Logger.verification('Verificar que se muestra un mensaje de error indicando los campos inválidos.')
      SignUpMethonds.verifyThatUserWasNotAdded()

   })
})
