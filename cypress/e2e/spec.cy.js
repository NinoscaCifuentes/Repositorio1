import {LoginElement} from "./pages/login/login.element";
import {LoginMethonds} from "./pages/login/login.methonds";
import {HomeMethonds} from "./home/home.methonds";
import {Logger} from "./util/logger";

describe('template spec', () => {
  it('passes', () => {
    // const username = 'ramdon1'
    // const password = 'ramdon1'
    Logger.stepNumber(1)
    Logger.step('Open the browser')
    cy.visit('https://demoblaze.com/')

    Logger.stepNumber(2)
    Logger.step('Click on login button')
    HomeMethonds.clickOnProduct('Samsung galaxy s6')

  })
})
