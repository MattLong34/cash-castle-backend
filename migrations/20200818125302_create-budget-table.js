
exports.up = function(knex) {
  return knex.schema.createTable('budgets', budgets => {
      budgets.increments()
      budgets.string('title')
      budgets.integer('housing')
      budgets.integer('transportation')
      budgets.integer('food')
      budgets.integer('savings')
      budgets.integer('bills')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('budgets')
};
