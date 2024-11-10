export default (db, types) => {
    return db.define('user_form_data', {
        id: {
            type: types.UUID,
            defaultValue: types.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: types.UUID,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        form_data: {
            type: types.JSON,
        
        },
        form_type: {
            //
            type: types.ENUM,
            values: [
                '0', // intial state
                '1', // waiting for 4 weeks 
                '2', // waiting for 6 months
                
            ],
            default:"0"
        },
        
        
        state:{
                type: types.ENUM,
                values: [
                    '0', // open 
                    '1', // close
                    
                ],
                default:"0"
            
        }

    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid: false
    });
};
