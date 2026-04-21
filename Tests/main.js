function factorial(n) {
  if (!Number.isInteger(n))
    throw new TypeError("El argumento debe ser un entero");
  if (n < 0)
    throw new RangeError("El factorial no está definido para negativos");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = { factorial };
