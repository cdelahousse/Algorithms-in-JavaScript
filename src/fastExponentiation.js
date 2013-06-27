/** 
 * Fast Exponentiation algorithm. Relies on the principle that
 * a^n = (a^(n/2))^2
 *
 * @param {number} base
 * @param {number} power
 * @returns {number}
 */
function fastExp(base,power) {

  'use strict';

  function sqr(a) {return a*a;}
  return (power === 0) ? 1 :
    ((power & 1) === 0) ?
    sqr(fastExp(base, power >> 1 ))  : //even (b^(pow/2))^2
    sqr(fastExp(base, power >> 1 )) * base; //odd b*(b^(pow/2))^2
}

/** Export to global scope */
if (module && module.exports) module.exports = fastExp; 
