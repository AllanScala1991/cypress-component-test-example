import { Title } from './index'

describe('Title component tests', () => {
  it('Should validate text', () => {
    cy.mount(<Title text='Test' color='blue' fontSize={2}/>)
    cy.get('span').should("contains.text", "Test")
  })
})