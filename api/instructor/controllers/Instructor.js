'use strict';

/**
 * Instructor.js controller
 *
 * @description: A set of functions called "actions" for managing `Instructor`.
 */

module.exports = {

  /**
   * Retrieve instructor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.instructor.search(ctx.query);
    } else {
      return strapi.services.instructor.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a instructor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.instructor.fetch(ctx.params);
  },

  /**
   * Count instructor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.instructor.count(ctx.query);
  },

  /**
   * Create a/an instructor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.instructor.add(ctx.request.body);
  },

  /**
   * Update a/an instructor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.instructor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an instructor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.instructor.remove(ctx.params);
  }
};
