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
      it("button element should display 'Rankings'", () => {
          let element = document.querySelector("#rankings")
          expect(element).to.have.text("Rankings")
      })
      it("button element should display 'Sobre nós'", () => {
          let element = document.querySelector("#sobreNos")
          expect(element).to.have.text("Sobre nós")
      })
  })
})