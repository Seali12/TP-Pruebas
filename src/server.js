const http = require('http');
const { URL } = require('url');
const { calcularFactura } = require('./invoice');

const PUERTO = process.env.PORT || 3000;

function manejarFactura(solicitud, respuesta, direccion) {
  const cantidad = Number(direccion.searchParams.get('quantity'));
  const precio = Number(direccion.searchParams.get('price'));
  const estado = direccion.searchParams.get('state');

  const resultado = calcularFactura(cantidad, precio, estado);

  respuesta.writeHead(200, { 'Content-Type': 'application/json' });
  respuesta.end(JSON.stringify(resultado));
}

const servidor = http.createServer((solicitud, respuesta) => {
  const direccion = new URL(
    solicitud.url,
    `http://${solicitud.headers.host}`,
  );

  if (direccion.pathname === '/api/invoice') {
    return manejarFactura(solicitud, respuesta, direccion);
  }

  respuesta.writeHead(404, { 'Content-Type': 'application/json' });
  respuesta.end(JSON.stringify({ error: 'No encontrado' }));
});

if (require.main === module) {
  servidor.listen(PUERTO, () => {
    console.log(
      `Carpaccio  escuchando en http://localhost:${PUERTO}`,
    );
  });
}

module.exports = servidor;
