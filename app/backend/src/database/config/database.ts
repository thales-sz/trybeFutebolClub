import sequelize = require('sequelize');

require('dotenv/config');

const config: sequelize.Options = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  dialect: 'postgres',
  define: {
    timestamps: true,
  },
};

module.exports = config;
