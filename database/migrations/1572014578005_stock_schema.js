'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StockSchema extends Schema {
  up () {
    this.create('stocks', (table) => {
      table.increments()
      table.integer('id_producto').unsigned().references('id').inTable('productos').onDelete('cascade');
      table.integer('stock').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('stocks')
  }
}

module.exports = StockSchema
