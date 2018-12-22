'use strict';

/**
 * Course.js controller
 *
 * @description: A set of functions called "actions" for managing `Course`.
 */

module.exports = {

  /**
   * Retrieve course records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.course.search(ctx.query);
    } else {
      return strapi.services.course.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a course record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.course.fetch(ctx.params);
  },

  /**
   * Count course records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.course.count(ctx.query);
  },

  /**
   * Create a/an course record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.course.add(ctx.request.body);
  },

  /**
   * Update a/an course record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.course.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an course record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.course.remove(ctx.params);
  }
};
