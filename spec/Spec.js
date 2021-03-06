
var code = require('../main.js');
describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).toEqual(0.1);
    expect(code.calculate(10)).toEqual(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calculate(15)).toEqual(1.35);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calculate(25)).toEqual(1.95);
  });
  it('should tax 5% on the third $10', function(){
    expect(code.calculate(33)).toEqual(2.29);
  });

});
