import { Input } from "./index";

describe('Input component tests', () => {
    it('Should validate text', () => {
      cy.mount(<Input fontSize={2} type='password' placeholder='Digite sua senha'/>)
      cy.get("input")
      .type("123456")
      .should("have.value", "123456")
    })

    it("Should validate empty value", () => {
        cy.mount(<Input fontSize={2} type='password' placeholder='Digite sua senha'/>)
        cy.get("input")
        .should("have.value", "")
    })

    it('Should validate type text', () => {
      cy.mount(<Input fontSize={2} type='text' placeholder='Digite sua senha'/>)
      cy.get('input')
      .should('have.attr', 'type', 'text')
    })

    it('Should validate type password', () => {
      cy.mount(<Input fontSize={2} type='password' placeholder='Digite sua senha'/>)
      cy.get('input')
      .should('have.attr', 'type', 'password')
    })

    it('Should validate placeholder', () => {
      cy.mount(<Input fontSize={2} type='password' placeholder='Digite sua senha'/>)
      cy.get('input')
      .should('have.attr', 'placeholder', 'Digite sua senha')
    })
  })