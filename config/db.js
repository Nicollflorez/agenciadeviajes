import Sequelize from "sequelize";

const db = new Sequelize('agenciadeviajes_stairsword', 'agenciadeviajes_stairsword', '9ef22beef1ff1a508630e46adc61b1b409fe2aa1', {
    host: 'c31pz.h.filess.io',
    port: 61002,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

export default db;
