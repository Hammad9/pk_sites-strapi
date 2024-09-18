'use strict';

/**
 * testing-pk-site service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testing-pk-site.testing-pk-site');
