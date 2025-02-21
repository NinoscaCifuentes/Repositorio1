import {LoginElement} from "./pages/login/login.element";
import {LoginMethonds} from "./pages/login/login.methonds";
import {HomeMethonds} from "./home/home.methonds";

describe('template spec', () => {
  it('passes', () => {
    // const username = 'ramdon1'
    // const password = 'ramdon1'
    cy.visit('https://demoblaze.com/')
  HomeMethonds.clickOnProduct('Samsung galaxy s6')

  })
})
