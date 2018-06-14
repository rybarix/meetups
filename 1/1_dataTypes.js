/**
    Six data types that are primitives:
      boolean
      null
      undefined
      number
      string
      symbol (new in ECMAScript 2015) https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/
      object
 */

const b = true || false;

const n = null

const num = number(100);

const x = 100

const str = 'Hello mada...';
const str2 = "faka...";

const sym1 = Symbol('sandro'); // https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/
const sym2 = Symbol('sandro');

const clovek = {
  meno: "sandro",
  priezvisko: "rybarik",
  fullname: function() {
    
  }
};

