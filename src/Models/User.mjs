export default (db, types) => {
    return db.define('user', {
        id: {
            type: types.UUID,
            defaultValue: types.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        firstName: {  
            type: types.STRING(50),  // Adjust length as needed
            allowNull: false
        },
        secondName: {  
            type: types.STRING(50),  
            allowNull: false
        },
        username: {  
            type: types.STRING(50),  
            allowNull: false,
           
        },
        email: {
            type: types.STRING(100),
            allowNull: false,
            unique: true,  // Email should be unique as well
            validate: { 
                isEmail: true 
            }
        },
        password: {
            type: types.STRING(255),
            allowNull: false
        },
        role: {
            type: types.ENUM(['1', '2', '3']),  // ENUM expects an array of values
            defaultValue: '3',
            comment: "1 -> admin, 2 -> user Group 1, 3 -> user Group 2"
        },
        activation: {
            type: types.BOOLEAN,
            defaultValue: true
        },
        email_verify: {
            type: types.BOOLEAN,
            defaultValue: false
        },
        progression: {
            type: types.INTEGER,
            defaultValue: 0
        },
        biomarkers: {
            type: types.ENUM(['no', 'yes']),  // ENUM expects an array
            defaultValue: "no"
        }
    }, {
        timestamps: true,  // Automatically adds createdAt and updatedAt
        paranoid: true,     // Enables soft deletes (deletedAt)
        underscored: true,  // Converts camelCase column names to snake_case in the database
    });
};
