import Sequelize from 'sequelize';
import Config from './Config.mjs';
import dotenv from 'dotenv'
dotenv.config();

const NODE_ENV = process.env.NODE_ENV


export default new Sequelize(

    process.env.DB_DEV_DATABASE,
    process.env.DB_DEV_USERNAME,
    process.env.DB_DEV_PASSWORD,
    {
        host:  process.env.DB_DEV_HOST,
        dialect: 'mysql',
        timezone: "+02:00",
        benchmark: true,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        logging: false // configDB ? (msg, time) => console.log({query : msg, time: `${time} ms`}) : false
    }
);