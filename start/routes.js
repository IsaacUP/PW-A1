'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome');

Route.get('clientes', 'ClienteController.index');
Route.get('clientes/ver/:id', 'ClienteController.show');
Route.get('clientes/crear', 'ClienteController.create');
Route.post('clientes/crear', 'ClienteController.store');
Route.get('clientes/editar/:id', 'ClienteController.edit');
Route.post('clientes/editar/:id', 'ClienteController.update');
Route.get('clientes/eliminar/:id', 'ClienteController.destroy');

Route.get('productos', 'ProductoController.index');
Route.get('productos/ver/:id', 'ProductoController.show');
Route.get('productos/crear', 'ProductoController.create');
Route.post('productos/crear', 'ProductoController.store');
Route.get('productos/editar/:id', 'ProductoController.edit');
Route.post('productos/editar/:id', 'ProductoController.update');
Route.get('productos/eliminar/:id', 'ProductoController.destroy');

Route.get('stocks','StockController.index');
Route.get('stocks/ver/:id', 'StockController.show');
Route.get('stocks/crear', 'StockController.create');
Route.post('stocks/crear', 'StockController.store');
Route.get('stocks/editar/:id', 'StockController.edit');
Route.post('stocks/editar/:id', 'StockController.update');
Route.get('stocks/eliminar/:id', 'StockController.destroy');
