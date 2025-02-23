import {CommonPageData} from "../pages/commun-page/common-page.data";
import {Logger} from "../util/logger";
import {CommonPageMethonds} from "../pages/commun-page/common-page.methonds";
import {LoginMethonds} from "../pages/login/login.methonds";
import {LoginData} from "../pages/login/login.data";
import {HomeMethonds} from "../pages/home/home.methonds";

describe(CommonPageData.testSuit.catalog,()=>{
   it('Navegación por categorías',()=>{
      Logger.stepNumber(1)
      Logger.step('Iniciar sesión como usuario registrado.')
      Logger.subStep('Navegar a la página de inicio.')
      CommonPageMethonds.navigateDemoPlace()
      Logger.subStep('click on login in')
      CommonPageMethonds.clickLoginOptions()
      LoginMethonds.insertUserName(LoginData.dataValida.userName)
      LoginMethonds.insertPassword(LoginData.dataValida.password)
      LoginMethonds.clickOnLoginButton()

      Logger.stepNumber(2)
      Logger.subStep('Navegar a la página de inicio.')
      CommonPageMethonds.clickHomeOptions()

      Logger.stepNumber(3)
      Logger.subStep('Seleccionar una categoría de productos en el menú de navegación.')
      HomeMethonds.clickOnMonitor()
      Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría\n' +
         'seleccionada.')
      HomeMethonds.verificProductName('Apple monitor 24')
      HomeMethonds.verificProductName('ASUS Full HD')
   })
})
