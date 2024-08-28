export default (db, types) => {
    return db.define('user', {
        id: {
            type: types.UUID,
            defaultValue: types.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        firstName: {  // Add the first name field
            type: types.STRING(50),  // Adjust the length as necessary
            allowNull: false
        },
        secondName: {  // Add the second name field
            type: types.STRING(50),  // Adjust the length as necessary
            allowNull: false
        },
        username: {  // Add the username field
            type: types.STRING(50),  // Adjust the length as necessary
            allowNull: false,
            unique: true  // Ensure usernames are unique
        },
        email: {
            type: types.STRING(100),
            allowNull: false,
            validate: { isEmail: true }
        },
        password: {
            type: types.STRING(255),
            allowNull: false
        },
        role: {
            type: types.ENUM,
            values: ['1', '2', '3'],
            defaultValue: '3',
            // 1 -> admin
            // 2 -> user Group 1
            // 3 -> user Group 2
        },
        activation: {
            type: types.BOOLEAN,
            defaultValue: true
        },
        email_verify: {
            type: types.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid: true
    });
};
