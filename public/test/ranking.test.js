import { expect } from 'chai';
import { use } from 'chai';
import chaiDom from 'chai-dom';
import { JSDOM } from 'jsdom';

use(chaiDom);

describe("ranking.html", () => {
  describe('Testes automatizados para o ranking - Critério: Classes de Equivalência', () => {
    let dom;

    before(() => {
      dom = new JSDOM(`<!DOCTYPE html><table>
        <tr>
          <th>Nome</th>
          <th>Série/Ano</th>
          <th>Média</th>
        </tr>
        <tr>
          <td>AYRES DE MOURA PROFESSOR</td>
          <td>9º Ano EF</td>
          <td>279.8</td>
        </tr>
        <!-- unknown number of rows with unknown data -->
      </table>`);

      global.document = dom.window.document;
      global.window = dom.window;
    });

    it('Deve exibir a tabela corretamente', () => {
      const table = document.querySelector('table');
      expect(table).to.exist;
    })

    it('Deve ter os cabeçalhos corretos', () => {
      const table = document.querySelector('table');
      const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent);
      expect(headers).to.deep.equal(['Nome', 'Série/Ano', 'Média']);
    });

    it('Deve ter os dados corretos', () => {
      const table = document.querySelector('table');
      const rows = Array.from(table.querySelectorAll('tr')).slice(1); // Ignorar a primeira linha (cabeçalhos)
      expect(rows.length).to.be.above(0); // Verificar se existem linhas de dados

      rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td')).map(td => td.textContent);
        expect(cells.length).to.equal(3); // Verificar se cada linha tem 3 células

      });
    });

    it('Deve ter os dados das células corretos', () => {
      const table = document.querySelector('table');
      const rows = Array.from(table.querySelectorAll('tr')).slice(1);
      rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td')).map(td => td.textContent);
        expect(cells.length).to.equal(3); // Verificar se cada linha tem 3 células
        expect(cells[0]).to.be.a('string').and.not.to.be.empty; // Verificar se o nome não está vazio
        expect(cells[1]).to.be.a('string').and.not.to.be.empty; // Verificar se a série/ano não está vazio
        expect(cells[2]).to.satisfy(value => !isNaN(parseFloat(value))); // Verificar se a média é um número válido
      });
    });
  });
});