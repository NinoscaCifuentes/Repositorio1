import {LoginElement} from "./login.element";
import {CommonPageMethonds} from "../commun-page/common-page.methonds";

export class LoginMethonds{
   static insertUserName (username){
        LoginElement.textboxes.username.invoke('val', username)
    }
   static insertPassword (password){
        LoginElement.textboxes.password.invoke('val', password)
    }
   static clickOnLoginButton (){
        LoginElement.buttons.login.click()
    }
   static clickOnCloseButton (){
        LoginElement.buttons.close.click()
    }
    static login (username, password){
        LoginElement.textboxes.username.type(username)
        LoginElement.textboxes.password.type(password)
        LoginElement.buttons.login.click()
    }
    static verificWrongPasswordMessage(){
       CommonPageMethonds.verificAlertMessage('Wrong password.')
    }
}
