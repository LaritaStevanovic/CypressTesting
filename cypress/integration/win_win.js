context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.winwin.rs/')
    })

    it('Nav bar menu is visible', () => {
      cy
        .get('#menu').should('be.visible')
    });

    it('Options from Nav bar menu is clickable', () => {
      cy
        .get('.link-top').first().click({force: true})
        .get('.i-tv-audio-video').first().click({force: true})
        .url().should('contain', 'tv-audio-video')
    });
});