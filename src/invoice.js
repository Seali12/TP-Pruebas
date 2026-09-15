// El impuesto depende del estado y se aplica sobre el subtotal ya con el descuento restado.

const ESCALONES_DESCUENTO = [
  { subtotalMinimo: 50000, porcentaje: 15 },
  { subtotalMinimo: 10000, porcentaje: 10 },
  { subtotalMinimo: 7000, porcentaje: 7 },
  { subtotalMinimo: 5000, porcentaje: 5 },
  { subtotalMinimo: 1000, porcentaje: 3 },
];

const TASAS_IMPUESTO = {
  UT: 6.85,
  NV: 8.0,
  TX: 6.25,
  AL: 4.0,
  CA: 8.25,
};

function obtenerPorcentajeDescuento(subtotal) {
  const escalon = ESCALONES_DESCUENTO.find(
    (nivel) => subtotal >= nivel.subtotalMinimo,
  );

  if (escalon) {
    return escalon.porcentaje;
  }

  return 0;
}

function obtenerPorcentajeImpuesto(estado) {
  return TASAS_IMPUESTO[estado];
}

function calcularFactura(cantidad, precio, estado) {
  const subtotal = cantidad * precio;

  const porcentajeDescuento = obtenerPorcentajeDescuento(subtotal);
  const importeDescuento = (subtotal * porcentajeDescuento) / 100;

  const importeGravable = subtotal - importeDescuento;
  const porcentajeImpuesto = obtenerPorcentajeImpuesto(estado);
  const importeImpuesto = (importeGravable * porcentajeImpuesto) / 100;

  const total = importeGravable + importeImpuesto;

  return {
    subtotal,
    discountPercent: porcentajeDescuento,
    discountAmount: importeDescuento,
    taxPercent: porcentajeImpuesto,
    taxAmount: importeImpuesto,
    total,
  };
}

module.exports = {
  calcularFactura,
  obtenerPorcentajeDescuento,
  obtenerPorcentajeImpuesto,
  ESCALONES_DESCUENTO,
  TASAS_IMPUESTO,
};
