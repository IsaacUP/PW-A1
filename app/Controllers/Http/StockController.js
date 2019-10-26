'use strict'
const Stock = use('App/Models/Stock')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with stocks
 */
class StockController {
  /**
   * Show a list of all stocks.
   * GET stocks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let stocks = await Stock.all();

    //return view.render('stocks.index',{stocks:stocks.toJSON()});
    response.json({stocks:stocks.rows});
  }

  /**
   * Render a form to be used for creating a new stock.
   * GET stocks/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('stocks.create');
  }

  /**
   * Create/save a new stock.
   * POST stocks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Stock.create(request.all());

    //return response.redirect('/stocks')
    return response.json('Stock creado');
  }

  /**
   * Display a single stock.
   * GET stocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let stock = await Stock.find(params.id);

    return view.render('stocks.show',stock);
  }

  /**
   * Render a form to update an existing stock.
   * GET stocks/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let stock = await Stock.find(params.id);
    return view.render('stocks.edit',{stock:stock});
  }

  /**
   * Update stock details.
   * PUT or PATCH stocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let stock = await Stock.find(params.id);

    stock.merge(request.all());

    await stock.save();

    return response.json('Stock modificado');
    //return response.redirect('/stocks');
  }

  /**
   * Delete a stock with id.
   * DELETE stocks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let stock = await Stock.find(params.id);

    stock.delete();

    //return response.redirect('/stocks');
    return response.json('Stock eliminado');
  }
}

module.exports = StockController
