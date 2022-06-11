it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have display', () => {})
})
