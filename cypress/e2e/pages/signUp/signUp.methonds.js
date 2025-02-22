import {SignUpElements} from "./signUp.elements";
import {CommonPageMethonds} from "../commun-page/common-page.methonds";

export class SignUpMethonds{
   static clickOnSignUpButton(){
      SignUpElements.buttons.signUp.click()
    }
   static insertUsername(username){
      SignUpElements.textBoxess.username.type(username)
    }
    static insertPassword(password){
      SignUpElements.textBoxess.password.type(password)
    }
    static verifyThatUserWasAdded(){
      CommonPageMethonds.verificAlertMessage('Sign up successful.')
    }
}
