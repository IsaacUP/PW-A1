'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {

    producto(){
        return this.hasMany('App/Models/Producto','id');
    }

}

module.exports = Cliente
