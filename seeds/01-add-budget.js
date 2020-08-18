
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('budgets').del()
    .then(function () {
      // Inserts seed entries
      return knex('budgets').insert([{
        title: "January Budget",
        housing: 1500,
        transportation: 400,
        food: 600,
        savings: 500,
        bills: 1000
      },{
        title: "February Budget",
        housing: 1500,
        transportation: 200,
        food: 400,
        savings: 200,
        bills: 1000
      },{
        title: "March Budget",
        housing: 1800,
        transportation: 600,
        food: 600,
        savings: 500,
        bills: 1000
      }]);
    });
};
