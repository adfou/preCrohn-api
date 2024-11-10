import Sequelize from 'sequelize';
import DB from "../Config/DBContact.mjs"



import userModel from './User.mjs';
import formModel from './form.mjs';

const User = userModel(DB, Sequelize); // Ensure you're using Sequelize.DataTypes
const Form = formModel(DB, Sequelize);

User.hasMany(Form, { foreignKey: 'user_id', as: 'forms' });
// Form belongs to a User
Form.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
DB.sync({ alter: true ,force: true}) //
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
