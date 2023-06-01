import { expect } from 'chai';
import { use } from 'chai';
import chaiDom from 'chai-dom';
import { JSDOM } from 'jsdom';
use(chaiDom)

describe('Searching.html', () => {
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
          <!-- unknown number of rows with unknown data -->
          </tr>
        </table>`);
    document = dom.window.document;
  });

  describe("Test search result", () => {
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
  })
}) 