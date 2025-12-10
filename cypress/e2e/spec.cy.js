describe('Tehtävä 1', () => {
  it('Avaa wikipedia, hakee Jamk ja menee sivustolle, etsii sivulta Kampukset, ja vaihtaa englannin kielelle', () => {
    cy.visit('https://fi.wikipedia.org/');
    cy.reload();

    cy.get('.search-toggle').click();

    cy.get('input[name="search"]:visible').type('JAMK');

    cy.get('input[name="search"]:visible').type('{enter}');

    cy.url().should('include', 'Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu');

    cy.contains('h2', 'Kampukset').scrollIntoView();

    cy.contains('h2', 'Kampukset').should('be.visible');

    cy.wait(5000);

    cy.get('#p-lang-btn').click();

    cy.contains('English').click();

    cy.url().should('include', 'JAMK_University_of_Applied_Sciences');

    cy.wait(2000);
  });
});

describe('Tehtävä 2', () => {
  it('Testaa frontend perusteet kurssin pizza sivustoa', () => {
    cy.visit('https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim');

    cy.get('#nimi').type('Matti Meikäläinen');
    cy.get('#nimi').should('have.value', 'Matti Meikäläinen');

    cy.get('#puhelin').type('0401234567');
    cy.get('#puhelin').should('have.value', '0401234567');

    cy.get('#sposti').type('matti.meikalainen@example.com');
    cy.get('#sposti').should('have.value', 'matti.meikalainen@example.com');

    cy.get('#koko').select('Mega');

    cy.get('#Ruis').click();

    cy.get('#Kinkku').click();
    cy.get('#Ananas').click();
    cy.get('#Tonnikala').click();
    cy.get('#Oliivi').click();

    cy.contains('Hinta: 16.50 e').should('be.visible');
  });
});
