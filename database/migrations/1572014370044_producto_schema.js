'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.integer('codigo').notNullable();
      table.string('nombre',50).notNullable();
      table.double('precio',50).notNullable();
      table.string('marca',50).notNullable();
      table.integer('id_cliente').unsigned().references('id').inTable('clientes').onDelete('cascade');
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
