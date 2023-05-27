import { expect } from 'chai';
import { use } from 'chai';
import chaiDom from 'chai-dom';
import { JSDOM } from 'jsdom';
use(chaiDom)

describe('Ranking.html', () => {
  let dom;
  let document;

  beforeEach(() => {
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
    document = dom.window.document;
  });

  describe("Test ranking", () => {
    it('should have a table with three headers', () => {
      const headers = document.querySelectorAll('th');
      expect(headers).to.have.length(3);
      expect(headers[0]).to.have.text('Nome');
      expect(headers[1]).to.have.text('Série/Ano');
      expect(headers[2]).to.have.text('Média');
    });

    it('should have a table with at least one row of data', () => {
      const rows = document.querySelectorAll('tr');
      expect(rows.length).to.be.at.least(2); // header included
    });

    it('each row should have three cells', () => {
      const rows = document.querySelectorAll('tr');
      for (let i = 1; i < rows.length; i++) {
        expect(rows[i].children).to.have.length(3);
      }
    });
  });
});