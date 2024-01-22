
# Teste QA | Stoom - Tenda Atacado.

## Objetivo

O objetivo dessa breve documentação é apontar de forma simplificada o que foi desenvolvido e o que foi localizado conforme a proposta do teste.

## Descrição do Teste - [Conforme Solicitação]
O teste consistirá na criação de um script automatizado no ambiente de
desenvolvimento do e-commerce do Tenda Atacado.  
As tarefas a serem automatizadas incluem:

● Adicionar dois produtos ao carrinho - um produto Tenda e um produto de um
seller.

● Testar a funcionalidade de adicionar e remover unidades desses dois itens no
carrinho.

● Executar o processo de finalização do carrinho de compras, gerando um
pedido via boleto e outro utilizando um cartão de testes.

● Criar um cadastro na plataforma pelo ambiente de desenvolvimento e utilizar
esse usuário para fazer login e realizar o teste automatizado.

## Requisitos Técnicos 
● O teste deve ser desenvolvido utilizando o Cypress.

● O script deve ser disponibilizado em um repositório público no GitHub para
que nossa equipe possa acessar, executar e analisar o trabalho.

## Informações Adicionais

URL do Ambiente de Testes: https://marketplace-alpha.tendaatacado.com.br/

Cartão de Teste - Número: 4000000000000010
CVV e data de expiração pode ser qualquer valor.

Login: beatrizcrds7@gmail.com | Senha: Senha123@

## Documentação

[Documentação - Cypress](https://docs.cypress.io/guides/overview/why-cypress)
# Testes e Apontamentos

- Criar um cadastro [Novo usuário];
- Realizar login [Novo usuário];
- Adicionar um produto [Tenda] ao carrinho;
- Adicionar um produto [Seller] ao carrinho;
- Adicionar e remover os produtos ao carrinho;
- Executar processo completo de compra via boleto;
- Executar processo completo de compra via cartão de crédito.


### Criar um cadastro [Novo usuário]

```
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
```
### Realizar login [Novo usuário]

```
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
```
### Adicionar e Remover produtos do Carrinho

```
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
```
### Processo completo de compra via Boleto

/// <reference types="cypress"/>

```
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

    // Finalizar compra via Boleto
    cy.get('button[type="Continuar"]').click();

    //A partir desse momento voltamos ao [impedimento] do cadastro, onde não é possivel prosseguir já que precisamos conferir a identificação do usuário.

    });

});

```
### Processo completo de compra via Cartão

/// <reference types="cypress"/>

```
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

    // Finalizar compra via Boleto
    cy.get('button[type="Continuar"]').click();

    //A partir desse momento voltamos ao impedimento do cadastro, onde não é possivel prosseguir já que precisamos conferir a identificação do usuário.
    });
    
```
## Apontamentos finais

Tive alguns impedimentos no decorrer do processo de desenvolvimento dos scripts os impedimentos foram pontuados dentro do próprio código como forma de comentário. 
Vou apontar os mesmos para uma avaliação mais aprofundada.

- 1º Ao cadastrar um novo usuário foi informado todos os dados solicitados, ao finalizar o cadastro é enviado um código de verificação para validação do novo usuário mas os códigos recebidos via e-mail não são válidos.

- 2º Após finalizar o cadastro do novo usuário é possível observar que os e-mails de código de verificação não são pausados quando utilizados, sendo assim em um período de 2h recebi mais de 45 e-mails com código de verificação e mesmo com todos esses códigos nenhum era válido para finalizar o cadastro do novo usuário.

- 3º No processo de desenvolvimento dos scripts foi possível observar que algumas atribuições de classes e Id's não são válidas e não são possiveis de utilizar como parâmetros.

- 4º As vezes mesmo que um usuário tenha realmente um cadastro não era possivel realizar login com ele, uma instabilidade foi localizada referente a login com novos usuários.

- 5º Ao cadastrar um novo usuário foi possivel observar também que mesmo que todos os dados complementares tenham sido informados, eles nao estão sendo armazenados. Sendo necessário informar novamente os dados como [Sexo, data de nascimento, CPF, telefone e dados de endereço].

- 6º Foi possivel observar tambem que não é possivel finalizar o cadastro preenchendo manualmente e automaticamente todos os dados novamente desse novo usuário.

- 7º Sendo assim o usuário é IMPEDIDO de realizar compras via Boleto e Cartão já que não é possivel realizar a finalização do cadastro.

- 8º Conforme a navegação no site é possivel encontrar inúmeros impedimentos que dificultaram o processo de desenvolvimento dos scripts.

- 9º É possivel observar uma possivel falha de comunicação do site com o banco de dados, já que os dados informados não sao armazenados de forma correta.

- 10º Os scripts foram desenvolvidos conforme as possibilidades que foram disponibilizadas. 
## 🚀 Considerações finais.
Agradeço a oportunidade de participar do processo seletivo da Stoom, foi um desafio e tanto!

Nesse repositório irei anexar o arquivo desenvolvido em cypress, fico a disposição.
