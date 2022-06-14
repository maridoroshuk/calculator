it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should have navbar', () => {
    cy.get('nav').should('be.visible')
    cy.findByRole('link', {
      name: /calculator app/i,
    }).click()
    cy.findByRole('link', { name: /settings/i }).click()
    cy.findByRole('link', { name: /home/i }).click()
  })

  it('should have keypad', () => {
    cy.findByRole('button', {
      name: /\bC\b/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /7/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /8/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /9/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /\*/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /\-/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /4/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /5/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /6/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /\//i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /\+/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /1/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /2/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /3/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /=/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /\./i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /0/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /6/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /%/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /±/i,
    }).should('be.visible')
    cy.findByRole('button', {
      name: /\bce\b/i,
    }).should('be.visible')
  })

  it('should have display', () => {
    const number = 42
    cy.findByRole('button', {
      name: /4/i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(number)
  })

  it('should have history', () => {
    const historyStr = `4 + 2`

    cy.findByRole('button', {
      name: /4/i,
    }).click()
    cy.findByRole('button', {
      name: /\+/i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()
    cy.findByRole('button', {
      name: /=/i,
    }).click()

    cy.findByRole('heading', {
      name: /history/i,
    }).should('be.visible')
    cy.get('.sc-gZMcBi').contains(historyStr)
  })
})

describe('Settings page', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })
  it('should have theme change options', () => {
    cy.get('select').select('light')
    cy.get('select').should('have.value', 'light')

    cy.get('select').select('colored')
    cy.get('select').should('have.value', 'colored')

    cy.get('select').select('dark')
    cy.get('select').should('have.value', 'dark')
  })
  it('should have clear history button', () => {
    cy.findByRole('button', {
      name: /clear all history/i,
    }).should('be.visible')
  })
})
