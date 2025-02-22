import {CommonPageData} from "../pages/commun-page/common-page.data";
import {Logger} from "../util/logger";
import {CommonPageMethonds} from "../pages/commun-page/common-page.methonds";
import {LoginData} from "../pages/login/login.data";
import {LoginMethonds} from "../pages/login/login.methonds";

describe(CommonPageData.testSuit.Authentication,()=> {
  it('Inicio de sesión válido',()=> {
     Logger.stepNumber(1)
     Logger.step('Navegar a la página de inicio.')
     CommonPageMethonds.navigateDemoPlace()

     Logger.stepNumber(2)
     Logger.step('Hacer clic en "Log in" en la barra de navegación.')
     CommonPageMethonds.clickLoginOptions()

     Logger.stepNumber(3)
     Logger.step('Ingresar un nombre de usuario y/o contraseña inválidos')
     LoginMethonds.insertUserName(LoginData.dataValida.userName)
     LoginMethonds.insertPassword('mmmm')

     Logger.stepNumber(4)
     Logger.step('Hacer clic en "Log in" para iniciar sesión.')
     LoginMethonds.clickOnLoginButton()

     Logger.verification('Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado.')
     LoginMethonds.verificWrongPasswordMessage()
  })
})
