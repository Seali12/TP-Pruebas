const { test } = require('node:test');
const assert = require('node:assert');
const { calcularFactura } = require('../src/invoice');

test('ejemplo de la consigna: quantity=10, price=100, state=CA', () => {
  const resultado = calcularFactura(10, 100, 'CA');

  assert.strictEqual(resultado.subtotal, 1000);
  assert.strictEqual(resultado.discountPercent, 3);
  assert.strictEqual(resultado.discountAmount, 30);
  assert.strictEqual(resultado.taxPercent, 8.25);
  assert.strictEqual(resultado.taxAmount, 80.025);
  assert.strictEqual(resultado.total, 1050.025);
});
