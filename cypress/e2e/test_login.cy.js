describe('Тестирование логина и пароля QA studio', function () {
    
    it('Позитивная проверка авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

         it('Логика восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('test@gmail.com');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton').should('be.visible');
         }) 

        it('Негативная проверка авторизации (пароль)', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('3123');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

         it('Негативная проверка авторизации (логин)', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('2german@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

         it('Негативный кейс валидации (логин)', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

         it('Проверка результата при вводе строчных букв', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('GerMan@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Авторизация прошла успешно');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })
})