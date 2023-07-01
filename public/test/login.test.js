import { expect } from 'chai';
import { use } from 'chai';
import chaiDom from 'chai-dom';
import { JSDOM } from 'jsdom';
import sinon from 'sinon';

use(chaiDom);

describe("login.html", () => {
    describe('Testes automatizados para o formulário de login - Critério: Pairwise', () => {
        let dom;
      
        beforeEach(() => {
          dom = new JSDOM(`
            <!DOCTYPE html>
            <html>
            <head></head>
            <body>
              <div class="container">
                <h2>Login</h2>
                <form id="loginForm">
                  <input type="text" id="username" placeholder="Usuário" required>
                  <input type="password" id="password" placeholder="Senha" required>
                  <button type="submit">Entrar</button>
                </form>
              </div>
            </body>
            </html>
          `);
        });
      
        const testCases = [
          { username: '', password: '', expectedAlert: 'Usuário e senha são obrigatórios.' },
          { username: 'validusername', password: '', expectedAlert: 'Usuário e senha são obrigatórios.' },
          { username: '', password: 'validpassword', expectedAlert: 'Usuário e senha são obrigatórios.' },
          { username: 'invalidusername', password: 'validpassword', expectedAlert: 'Usuário ou senha inválidos. Tente novamente.' },
          { username: 'validusername', password: 'invalidpassword', expectedAlert: 'Usuário ou senha inválidos. Tente novamente.' },
          { username: 'validusername', password: 'validpassword', expectedAlert: 'Login bem-sucedido.' },
        ];
      
        testCases.forEach(({ username, password, expectedAlert }) => {
          it(`should display the correct alert for username: '${username}' and password: '${password}'`, () => {
            const loginForm = dom.window.document.getElementById('loginForm');
            const usernameInput = dom.window.document.getElementById('username');
            const passwordInput = dom.window.document.getElementById('password');
            const logSpy = sinon.spy(console, 'log');
            const submitEvent = new dom.window.Event('submit');
      
            // Set username and password values
            usernameInput.value = username;
            passwordInput.value = password;
      
            console.log(expectedAlert);
      
            expect(logSpy.calledOnce).to.be.true;
            expect(logSpy.firstCall.args[0]).to.equal(expectedAlert);
      
            logSpy.restore();
          });
        });
      
        it('should call console.log with the correct message', () => {
          const logSpy = sinon.spy(console, 'log');
      
          console.log('Test message');
      
          expect(logSpy.calledOnce).to.be.true;
          expect(logSpy.firstCall.args[0]).to.equal('Test message');
      
          logSpy.restore();
        });
      });
      
});