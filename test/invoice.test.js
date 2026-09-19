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

test('Texas: quantity=100, price=100, state=TX', () => {
  const resultado = calcularFactura(100, 100, 'TX');

  assert.strictEqual(resultado.subtotal, 10000);
  assert.strictEqual(resultado.discountPercent, 10);
  assert.strictEqual(resultado.discountAmount, 1000);
  assert.strictEqual(resultado.taxPercent, 6.25);
  assert.strictEqual(resultado.taxAmount, 562.5);
  assert.strictEqual(resultado.total, 9562.5);
});

test('Cantidad cero: quantity=0, price=100, state=CA', () => {
  const resultado = calcularFactura(0, 100, 'CA');
  assert.strictEqual(resultado.subtotal, 0);
  assert.strictEqual(resultado.discountPercent, 0);
  assert.strictEqual(resultado.discountAmount, 0);
  assert.strictEqual(resultado.taxPercent, 0);
  assert.strictEqual(resultado.taxAmount, 0);
  assert.strictEqual(resultado.total, 0);
});

test('Precio cero: quantity=10, price=0, state=CA', () => {
  const resultado = calcularFactura(10, 0, 'CA');
  assert.strictEqual(resultado.subtotal, 0);
  assert.strictEqual(resultado.discountPercent, 0);
  assert.strictEqual(resultado.discountAmount, 0);
  assert.strictEqual(resultado.taxPercent, 0);
  assert.strictEqual(resultado.taxAmount, 0);
  assert.strictEqual(resultado.total, 0);
});
