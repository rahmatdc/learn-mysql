"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    "use strict";

    module.exports = {
      up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("customers", [
          {
            name: "Firman",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Wawan",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Ilham",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      },

      down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("customers", null, {});
      },
    };
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
