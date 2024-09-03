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
            allowNull: false
        },
        form_type: {
            type: types.ENUM,
            values: [
                '0', // General information
                '1', // Your medical history
                '2', // Your family history
                '3', // Your diet
                '4', // Your physical activity
                '5', // Your smoking history
                '6'  // CROHN’S DISEASE: KNOWLEDGE AND ATTITUDES SURVEY
            ],
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid: true
    });
};
