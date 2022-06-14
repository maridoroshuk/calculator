describe('operations', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('add 4 + 2', () => {
    const result = 6

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

    cy.get('.sc-bdVaJa').contains(result)
  })

  it('subtract 4 - 2', () => {
    const result = 2

    cy.findByRole('button', {
      name: /4/i,
    }).click()
    cy.findByRole('button', {
      name: /\-/i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()
    cy.findByRole('button', {
      name: /=/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(result)
  })

  it('multiply 4 * 2', () => {
    const result = 8

    cy.findByRole('button', {
      name: /4/i,
    }).click()
    cy.findByRole('button', {
      name: /\*/i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()
    cy.findByRole('button', {
      name: /=/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(result)
  })

  it('divide 4 / 2', () => {
    const result = 2

    cy.findByRole('button', {
      name: /4/i,
    }).click()
    cy.findByRole('button', {
      name: /\//i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()
    cy.findByRole('button', {
      name: /=/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(result)
  })

  it('remainde 5 % 2', () => {
    const result = 1

    cy.findByRole('button', {
      name: /5/i,
    }).click()
    cy.findByRole('button', {
      name: /%/i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()
    cy.findByRole('button', {
      name: /=/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(result)
  })

  it('negative value -4 / 2', () => {
    const result = -2

    cy.findByRole('button', {
      name: /4/i,
    }).click()
    cy.findByRole('button', {
      name: /±/i,
    }).click()
    cy.findByRole('button', {
      name: /\//i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()
    cy.findByRole('button', {
      name: /=/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(result)
  })

  it('float value 4.2 * 2', () => {
    const result = 8.4

    cy.findByRole('button', {
      name: /4/i,
    }).click()
    cy.findByRole('button', {
      name: /\./i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()
    cy.findByRole('button', {
      name: /\*/i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()
    cy.findByRole('button', {
      name: /=/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(result)
  })

  it('delete digit 422 -> 42', () => {
    const before = 422
    const after = 42

    cy.findByRole('button', {
      name: /4/i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(before)

    cy.findByRole('button', {
      name: /\bC\b/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(after)
  })

  it('clean all 42 -> empty', () => {
    const before = 42

    cy.findByRole('button', {
      name: /4/i,
    }).click()
    cy.findByRole('button', {
      name: /2/i,
    }).click()

    cy.get('.sc-bdVaJa').contains(before)

    cy.findByRole('button', {
      name: /\bce\b/i,
    }).click()

    cy.get('.sc-bdVaJa').should('be.visible')
  })
})
