import {CommonPageData} from "../pages/commun-page/common-page.data";
import {Logger} from "../util/logger";
import {CommonPageMethonds} from "../pages/commun-page/common-page.methonds";
import {LoginMethonds} from "../pages/login/login.methonds";
import {LoginData} from "../pages/login/login.data";
import {HomeMethonds} from "../pages/home/home.methonds";
import {ProductMethonds} from "../pages/product/product.methonds";
import {CartMethonds} from "../pages/cart/cart.methonds";

const product= 'ASUS Full HD'
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
   it('Agregar producto al carrito',()=>{
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

      Logger.stepNumber(4)
      Logger.subStep('Hacer clic en un producto específico')
      HomeMethonds.clickOnProduct(product)

      Logger.stepNumber(5)
      Logger.subStep('Verificar que se muestra la página de detalles del producto')
      ProductMethonds.verifyProductDetailPageDisplay()

      Logger.stepNumber(6)
      Logger.subStep('Hacer clic en el botón "Add to cart".')
      ProductMethonds.onClickAddToCart()

      Logger.stepNumber(7)
      Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.')
      ProductMethonds.verifyProductAddMessage()
      CommonPageMethonds.clickCartOptions()
      CartMethonds.verifyProductAdded(product)



   })

})
