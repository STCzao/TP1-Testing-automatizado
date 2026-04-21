const assert = require("assert");
const { expect } = require("chai");
const chai = require("chai");
chai.should();

const { factorial } = require("./main");

describe("Factorial", function () {
  //Con assert
  it("factorial de 0 debe ser 1", function () {
    assert.strictEqual(factorial(0), 1);
  });

  it("factorial de 1 debe ser 1", function () {
    assert.strictEqual(factorial(1), 1);
  });

  //Con expect
  it("factorial de 5 debe ser 120", function () {
    expect(factorial(5)).to.equal(120);
  });

  it("factorial de 10 debe ser 3628800", function () {
    expect(factorial(10)).to.equal(3628800);
  });

  //Con should
  it("factorial de 3 debe ser 6", function () {
    factorial(3).should.equal(6);
  });

  it("factorial de 7 debe ser 5040", function () {
    factorial(7).should.equal(5040);
  });

  //Casos de error

  it("debe lanzar error con numero negativo", function () {
    expect(() => factorial(-1)).to.throw(RangeError);
  });

  it("debe lanzar error con argumento no entero", function () {
    expect(() => factorial("hola")).to.throw(TypeError);
  });
});


