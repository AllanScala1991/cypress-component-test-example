import { Label } from "./index";

describe('Label component tests', () => {
    it('Should validate text', () => {
      cy.mount(<Label text='Label Test' color='red' fontSize={2}/>)
      cy.get('label').should("contains.text", "Label Test")
    })

    it("Should validate label color", () => {
      cy.mount(<Label text='Label Test' color='blue' fontSize={2}/>)
      cy.get('label').should(label => {
        const color = window.getComputedStyle(label[0]).getPropertyValue('color');
        expect(color).contains('(0, 0, 255)')
      })
    })

    it("Should validate label fontSize", () => {
      cy.mount(<Label text='Label Test' color='white' fontSize={2}/>)
      cy.get('label').should(label => {
        const font = window.getComputedStyle(label[0]).getPropertyValue('font-size');
        expect(font).contains('10px')
      })
    })
  })