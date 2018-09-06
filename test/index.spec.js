const expect = require('chai').expect;
const index = require('../index');

describe('index', () =>{
  describe('#getLinksFromMd', () =>{

    context('When there is no parameter', () =>{
      it('should return error', () =>{
        var badFn = function () {index.getLinksFromMd('')};
        expect(badFn).to.throw('Parameter not defined');
      });
    });

    context('When the number is a string', () =>{
      it('should return error', () =>{
        expect(() =>{
          index.getLinksFromMd().typeof('string');
        }).to.throw(Error);
      });
    });

    context('When the string has no url', () =>{
      it('should return empty array', () =>{
        expect(index.getLinksFromMd("Oi você quer entrar no site?")
      ).to.deep.equal([]);
      });
    });

    context("When there one url", () =>{
      it("should return an array with the url object and the markdown link", () =>{
        expect(index.getLinksFromMd("Oi você quer entrar no site [google](www.google.com) ?")).to.deep.equal([ { href: 'www.google.com', text: 'google' } ]);
      });
    });

    context("When there are three urls", () =>{
      it("should return the object inside the array", () =>{
        expect(index.getLinksFromMd("Oi você quer entrar no site [google](www.google.com), no [bing](https://www.bing.com/) ou no [yahoo](https://br.search.yahoo.com/)?")
      ).to.deep.equal([ { href: 'www.google.com', text: 'google' },
          { href: 'https://www.bing.com', text: 'bing' },
          { href: 'search.yahoo.com', text: 'yahoo' } ]);
      });
    });
  });
});
