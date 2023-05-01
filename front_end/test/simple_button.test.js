const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe("simple_button.html", () => {
    beforeEach((done) => {
        JSDOM.fromFile("front_end/simple_button.html")
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
