import {ProductElement} from "./product.element";
import {CommonPageMethonds} from "../commun-page/common-page.methonds";

export class ProductMethonds{

 static onClickAddToCart(){
    ProductElement.button.addToCart.click()
 }
 static  verifyProductDetailPageDisplay(){
    ProductElement.button.addToCart.should('be.visible')
 }
 static verifyProductAddMessage(){
    CommonPageMethonds.verificAlertMessage('Product added')
 }
}
