# Burger Queen

Interfaz para toma de pedidos en restaurant de comida rápida usando una tablet.

Inicio de sesión:

![image](https://user-images.githubusercontent.com/39318358/49200180-3ae0fa00-f361-11e8-9a5b-d661dd1bdce0.png)

Toma de pedidos:

![image](https://user-images.githubusercontent.com/39318358/49200237-87c4d080-f361-11e8-91cb-0d410ce60bb8.png)

Envio a cocina:

![image](https://user-images.githubusercontent.com/39318358/49200244-90b5a200-f361-11e8-8cdb-541b8cd4c3aa.png)

## Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restaurante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos **Burguer Queen**, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 2 menús: uno para el desayuno, que es muy sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Cafe americano            |    5 |
> | Cafe con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo natural              |    7 |
>
> Y un menú para el resto del dia:
>
> <table width="100%">
>   <tbody>
>     <tr>
>       <td colspan="2" rowspan="1">Hamburguesas</td>
>       <td>Acompañamientos ($5)</td>
>       <td colspan="3" rowspan="1">Bebidas</td>
>     </tr>
>     <tr>
>       <td>Simple</td>
>       <td>10</td>
>       <td>Papas fritas</td>
>       <td></td>
>       <td>500ml</td>
>       <td>750ml</td>
>     </tr>
>     <tr>
>       <td>Doble</td>
>       <td>15</td>
>       <td>Onion Rings</td>
>       <td>Agua</td>
>       <td>5</td>
>       <td>8</td>
>     </tr>
>     <tr>
>       <td></td>
>       <td></td>
>       <td></td>
>       <td>refresco</td>
>       <td>7</td>
>       <td>10</td>
>     </tr>
>   </tbody>
> </table>
>
> Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana.
> **Y por $1 pueden agregarle queso o huevo.**
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el
> pedido varias veces antes de finalizarlo.

## Introducción

Partiendo de los requerimientos de negocio detallados en el correo del cliente,
nos piden construir **una interfaz que permita a lxs cajerxs tomar los pedidos
en una tablet, y desde ahí se puedan enviar a cocina** a través de un backend del
que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el
cliente en una estructura que podamos poner en un archivo JSON para después
_pintar_ en la pantalla.

Nuestra interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo que _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetivos

El objetivo principal de aprendizaje de este proyecto es construir una
_interfaz web_ usando el _framework_ elegido (React).

Atacar el problema de **cómo mantener la interfaz y
el estado sincronizados**, familiarizándose con
el concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

Como objetivo secundario, la implementación debe además seguir las
recomendaciones para PWAs (_Progressive Web Apps_), lo cual incluye conceptos
como **offline**.

Finalmente, la interfaz debe estar diseñada específicamente para correr en
**tablets**.

Tópicos: _react_, _pwa_, _offline-first_, _service-worker_.

## Checklist

### General

* [x] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Documenta proceso de diseño.
* [ ] Incluye info para developers (deps, instalación, uso, despliegue, testing,
  ...).

### Lighthouse

* [x] 80% o más en sección _Performance_.
* [x] 80% o más en sección _Progressive Web App_.
* [x] 80% o más en sección _Accessibility_.
* [x] 80% o más en sección _Best Practices_.

### Tests

* [ ] 70% o más en cobertura de _statements_.
* [ ] 70% o más en cobertura de _functions_.
* [ ] 70% o más en cobertura de _lines_.
* [ ] 70% o más en cobertura de _branches_.

### UI

#### Hito 1: Tomar pedidos

* [x] Ingresar nombre del cliente.
* [x] Filtrar _menú_ por _desayuno_ y _resto del día_.
* [x] Agregar ítem al pedido.
* [x] Eliminar ítem del pedido.
* [x] Mostrar _resumen_ de pedido con todos los items y el total.
* [x] Enviar a cocina (esto debe guardar el pedido).

#### Hito 2: Ver/atender pedidos

* [ ] Vista de pedidos pendientes.
* [ ] Marcar pedido como listo.
* [ ] Ver historial de pedidos.

#### Hito 3: Autenticación

* [x] Inicio de sesión.
* [x] Restaurar contraseña.

### UX

* [x] Se _ve_ bien y _funciona_ bien en tablets.
* [x] Se puede _agregar a la pantalla de inicio_ como web app (tiene manifest,
  íconos, ...) en iOS y Android.
* [x] Uso fácil en pantallas táctiles (touch screens).
* [x] Estado actual del pedido siempre visible mientras tomamos un pedido.

## Desarrollado para
[Laboratoria](http://www.laboratoria.la/) - Octubre, 2018
