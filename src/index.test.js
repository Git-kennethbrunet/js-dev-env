import {expect} from 'chai'
import assert from 'assert'
import jsdom from 'jsdom'
import fs from 'fs' // this comes with nodeJS --> FileSystem access

describe('Sample test 1', () => {
  it('simple test 1 - true equals true', () => {
    expect(true).to.equal(true)
  }),
  it('Sample math 2 - 1+2=3', () => {
    expect(1+2).to.equal(3)
  });
});

describe('Sample test 3', function() {
  describe('#indexOf()', function() {
    it('simple test 3 - should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Sample test 4', () => {
  it('Sample test', (done) => {
    // callback for calling when test is done
    fs.readFile('./src/index.html', 'utf-8', () => {
      //async file read
      expect(true).to.equal(true);
      // tell mocha the test is done
      done();
    });
  });
});

describe('Sample test 5 (asynchronous)', () => {
  it('Sample test 5 - h1 should say Wecome to JavaScript', (done) => { // Mocha must have for done asynchronous callback.
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Wecome to JavaScript")
      done(); // Mocha must have for done asynchronous callback.
      Window.close();
    });
  });
});
