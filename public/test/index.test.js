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
  describe("test buttons", () => {
      it("button element should display 'Buscar'", () => {
        let element = document.querySelector("#search")
        expect(element).to.have.text("Buscar")
      })
      it("button element should display 'Rankings'", () => {
          let element = document.querySelector("#rankings")
          expect(element).to.have.text("Rankings")
      })
      it("button element should display 'Sobre nós'", () => {
          let element = document.querySelector("#sobreNos")
          expect(element).to.have.text("Sobre nós")
      })
  })

  describe("test search bar", () => {
    it('should have an input element with the correct attributes', () => {
      let input = document.querySelector('input');
      expect(input).to.have.attr('type', 'text');
      expect(input).to.have.class('search');
      expect(input).to.have.attr('placeholder', 'Pesquisar...');
    });
  
    it('should update its value when the user types', () => {
      let input = document.querySelector('input');
      input.value = 'test';
      expect(input).to.have.value('test');
    });
  })
})