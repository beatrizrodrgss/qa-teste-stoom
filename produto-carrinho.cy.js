/// <reference types="cypress"/>


describe('Adicionar produtos ao carrinho', () => {
    it('Adicionar produto Tenda ao carrinho', () => { 
    // UUtilizar o [visit] para acessar a URL do site.
    cy.visit('https://marketplace-alpha.tendaatacado.com.br/');

    // Realizar login.
    cy.contains('Faça seu login').click();
    cy.get('#login').type('beatrizcrds7@gmail.com'); //Adicione um e-mail com cadastro completo.
    cy.get('#password').type('Senha123@');
    cy.get('button[type="submit"]').click();
    
    // Na barra de pesquisa digitar [Select] que seria uma marca propria da Tenda.
    cy.get('#searchbarComponent').type('Saco de Lixo');
    ccy.get('.input-group > div > .btn').click();

    // Adicionar 1 produto [Select] ao carrinho.
    cy.get('img[src="https://d3gdr9n5lqb5z7.cloudfront.net/fotos/1813_mini.webp"]').parent().click();
    cy.get('#buttonbuy-sku-000000000000977429-PT').click();

    // Na barra de pesquisa digitar [Café] para encontrar um Seller.
    cy.get('#searchbarComponent').type('Café');
    cy.get('button[type="Buscar"]').click();

    // Adicionar 1 produto [Seller] ao carrinho.
    cy.get('img[src="https://d3gdr9n5lqb5z7.cloudfront.net/fotos/3283_mini.webp"]').parent().click();
    cy.get('#buttonbuy-sku-000000000000061115-PT').click();

    // Remover produtos do carrinho.
    cy.get('button[type="Ver carrinho"]').click();
    cy.get('#vehicle1').click();
    cy.get('#icon-tash').click();
    cy.get('button[type="Continuar"]').click();

    });

});