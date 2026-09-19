# Elephant Carpaccio Light

TP de Calidad — Diseño de Casos de Prueba (Basado en el Elephant Carpaccio de Alistair Cockburn).

## Descripción de la aplicación

### Ejecutar la aplicacion
Para ejecutar la aplicacion basta con correr el comando `npm start`, si falla ejecutar `npm i` para instalar las dependencias y luego `npm start` nuevamente, esto va a abrir el puerto 3000 para poder ejecutar la aplicacion, mediante pegadas en la url como por ejemplo `http://localhost:3000/api/invoice?quantity=10&price=100&state=CA` devuelve:
```
{
  "subtotal": 1000,
  "discountPercent": 3,
  "discountAmount": 30,
  "taxPercent": 8.25,
  "taxAmount": 80.025,
  "total": 1050.025
}
```

### Ejecutar Test
Para ejecutar la aplicacion basta con correr el comando `npm test`, esto deberia tener una salida con los nombres de los test, su tiempo de ejecucion, los tipos y cantidad de test que hay.


## Linea de Pensamiento

### Primer y segundo Test 
Se hizo el primer y segundo test probando el caso mas simple y feliz, usando una cantidad, precio real y estado coherente, se comprobo la salida esperada, un resultado exitoso, sin errores frente a unos datos normales y esperados por la aplicacion, los problemas surgieron cuando se empezo a poner datos invalidos. No haec falta probar todos los casos con datos correctos, ya que estamos buscando optimizar los test para encontrar la mayor cantidad de errores posibles
### Tercer Test
El tercer test se probo una cantidad 0 y el precio de 100, esto funciona mal ya que se espera que el **taxPercent** sea nulo ya que al ser la cantidad 0 no se deberia aplicar ningun impuesto, por lo tanto deberia descartarlo o devolver 0, se corrige la aplicacion para tener en cuenta eso