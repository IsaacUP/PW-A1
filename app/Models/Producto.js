'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {

    cliente(){
        return this.hasMany('App/Models/Cliente','id');
    }
}

module.exports = Producto
