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
            comment: "1 -> admin, 2 -> Intervention, 3 -> Control"
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
        },
        phase: {
            type: types.INTEGER,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 3
            },
            set(value) {
                if (value < 0) {
                    this.setDataValue('phase', 0); // Set to 0 if the value is less than 0
                } else if (value > 3) {
                    this.setDataValue('phase', 3); // Set to 3 if the value is greater than 3
                } else {
                    this.setDataValue('phase', value); // Set the value if it's within the range
                }
            }
        }
        ,
        state:{
                type: types.ENUM,
                values: [
                    '0', // open 
                    '1', // close
                    
                ],
                defaultValue:"0"
            
        }
    }, {
        timestamps: true,  // Automatically adds createdAt and updatedAt
        paranoid: true,     // Enables soft deletes (deletedAt)
        underscored: true,  // Converts camelCase column names to snake_case in the database
    });
};
