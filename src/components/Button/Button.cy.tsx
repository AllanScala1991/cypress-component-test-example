import { Button } from "./index";

describe('Button component tests', () => {
    it('Should validate text', () => {
      cy.mount(<Button backgroundColor='#8257E5' buttonText='Acessar' textColor='#FFFFFF' onClick={cy.stub().as('buttonClick')}/>)
      cy.get('button').should("contains.text", "Acessar")
    })

    it('Should validate click in button', () => {
        cy.mount(<Button backgroundColor='#8257E5' buttonText='Acessar' textColor='#FFFFFF' onClick={cy.stub().as('buttonClick')}/>)
        cy.get('button').should("contains.text", "Acessar")
        cy.get('button').click()
        cy.get('@buttonClick').should('have.been.calledOnce')
      })
  })