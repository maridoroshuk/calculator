it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should have navbar', () => {
    cy.findByRole('banner')
    cy.findByRole('link', { name: /calculator app/i })
    cy.findByRole('link', { name: /home/i })
    cy.findByRole('link', { name: /settings/i })
  })
  it('should have display', () => {})
  it('should have history', () => {})
  it('should have keypad', () => {})
})

describe('Settings page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should have theme change options', () => {})
  it('should have clear history button', () => {})
  it('should have history', () => {})
})
