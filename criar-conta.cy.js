/// <reference types="cypress"/>


describe('Cadastro no site Tenda', () => {
    it('Usuário deve realizar um cadastro com sucesso', () => { 
        // Utilizar o [visit] para acessar a URL do site.
        cy.visit('https://marketplace-alpha.tendaatacado.com.br/');
        
        // Utilizar o [click] para iniciar o processo de login.
        cy.contains('Faça seu login').click();

        // Temos duas opções para realizar login, seria [Criar] uma nova conta ou realizar [Login] com uma existente.
        // Nesse script vamos [Criar] uma nova conta.
        cy.contains('Criar conta').click();
        
        // Vamos preencher os dados do formulário de cadastro.
        cy.get('#nome').type('Beatriz Cristina Rodrigues dos Santos');
        cy.get('#cpf').type('033.773.592-14');
        cy.get('#email').type('beatrizcrds7@gmail.com');
        cy.get('#cellphone').type('(92)99207-1100'); 
        cy.get('#password').type('Amnesia123@');
        cy.get('#password2').type('Amnesia123@');
        // O campo #cellphone no desenvolvimento ao invés de ser adicionado (99)99999-9999 apenas como placeholder...
        // foi adicionado como [value]. Nesse caso mesmo que a automação informe um #cellphone especifico...
        // esse dado é subscrito automaticamente pelo [value] que foi adicionado ao desenvolvimento ou seja o número (99)99999-9999.

        // Utilizar o [click] para marcar o Checkbox de [Desejo receber os conteúdos do Tenda Atacado]
        cy.get('#optIn').click();

        // Clicar no botão de [Criar sua conta no Tenda atacado]
        cy.get('button[type="submit"]').click();

        //Caso queira verificar se o cadastro foi realizado com sucesso por uma checagem na tela é só utilizar o comentario abaixo:
        //cy.contains('Usuário cadastrado.').should('be.visible');

        //Caso precise de um script para validação do código enviado via e-mail é só utilizar o comentario abaixo:
        //it('Usuário deve validar código recebido via e-mail', () => {
        //cy.get('#code').type('código-recebido-via-email');
        //cy.get('button[type="submit"]').click();

        //Caso precise reenviar o codigo para seu e-mail utilize o comentario abaixo:
        //cy.get('button[type="Reenviar código"]').click();
        //});

    });
});