import {PlaceElement} from "./place.element";

export class PlaceMethonds{
   static insertName(name){
      PlaceElement.textBoxesslement.name.invoke('val',name)
     }
   static insertCountry(name){
      PlaceElement.textBoxesslement.country.invoke('val',name)
   }
   static insertCity(name){
      PlaceElement.textBoxesslement.city.invoke('val',name)
   }
   static insertCreditCard(name){
      PlaceElement.textBoxesslement.creditCard.invoke('val',name)
   }
   static insertMonth(name){
      PlaceElement.textBoxesslement.month.invoke('val',name)
   }
   static insertYear(name){
      PlaceElement.textBoxesslement.year.invoke('val',name)
   }
   static clickPurchase(){
      PlaceElement.buttons.purchase.click()
   }
   static clickClose(){
      PlaceElement.buttons.close.click()
   }
}
