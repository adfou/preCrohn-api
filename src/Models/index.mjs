import Sequelize from 'sequelize';
import DB from "../Config/DBContact.mjs"



import userModel from './User.mjs';
import formModel from './form.mjs';

const User = userModel(DB, Sequelize); // Ensure you're using Sequelize.DataTypes
const Form = formModel(DB, Sequelize);

DB.sync({ alter: true }) //
    .then(() => {
        console.log('Tables are updated without being deleted.');
    })
    .catch((error) => {
        console.error('Unable to update Tables:', error);
    });

export {
    User,
    Form,
};
