/// <reference types="cypress"/>


describe('Realizar Login com uruário novo', () => {
    it('Usuário deve realizar login com sucesso', () => { 
    // Utilizar o [visit] para acessar a URL do site.
    cy.visit('https://marketplace-alpha.tendaatacado.com.br/');

    // Realizar login.
    cy.contains('Faça seu login').click();
    cy.get('#login').type('beatrizcrds7@gmail.com');
    cy.get('#password').type('Senha123@');
    cy.get('button[type="submit"]').click();

    // Ao cadastrar um novo usuário foi possivel observar que mesmo que todos os dados complementares tenham sido informados no ato do cadastro...
    // essas informações não estão sendo armazenadas de forma correta, sendo necessario informar os dados complementares novamente [Sexo, Data de nascimento, CPF, Telefone e dados de endereço].
    // Mesmo que todos os dados sejam preenchidos novamente ao submeter para serem armazenados, observa-se um retorno de falha não sendo possivel concluir o cadastro incial.

    // É possivel utilizar da função de [click] em cima da logo do site para voltar ao site principal mesmo com o cadastro incompleto.
    // cy.get('.LogoComponent > .svgIcon').click();
    });

});