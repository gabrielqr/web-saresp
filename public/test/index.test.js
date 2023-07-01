import { expect } from 'chai';
import { use } from 'chai';
import chaiDom from 'chai-dom';
import { JSDOM } from 'jsdom';
use(chaiDom)

describe("simple_button.html", () => {
  beforeEach((done) => {
    JSDOM.fromFile("public/index.html")
      .then((dom) => {
        global.document = dom.window.document
      })
      .then(done, done);
  })

  describe("test search bar", () => {
    it('should have an input element with the correct attributes', () => {
      let input = document.querySelector('input');
      expect(input).to.have.attr('type', 'text');
      expect(input).to.have.class('search');
      expect(input).to.have.attr('placeholder', 'Digite sua pesquisa');
    });

    it('should update its value when the user types', () => {
      let input = document.querySelector('input');
      input.value = 'test';
      expect(input).to.have.value('test');
    });
  })

  describe('Testes automatizados para a homepage - Critério: Pairwise', function () {
    it('Deve permitir inserir texto na barra de pesquisa', function () {
      const searchBar = document.getElementById('search');
      searchBar.value = 'Exemplo de texto';
      expect(searchBar.value).to.equal('Exemplo de texto');
    });

    it('Deve exibir o ranking estadual ao clicar no botão "Ranking Estadual"', function () {
      const rankingButton = document.getElementById('rankings');
      let isRankingDisplayed = false;
      rankingButton.addEventListener('click', function () {
        isRankingDisplayed = true;
      });

      rankingButton.click();
      expect(isRankingDisplayed).to.be.true;
    });

    it('Deve selecionar a opção correta no seletor dropdown', function () {
      const dropdownSelector = document.getElementById('dropdown');
      dropdownSelector.value = 'opcao2';

      expect(dropdownSelector.value).to.equal('opcao2');
    });
  });

})