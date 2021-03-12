const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    // 테이블 설정
    static init(sequelize) {
        return super.init({
            user_id: {
                type: Sequelize.STRING(20),
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: "User",
            tableName: "user",
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    // 다른 모델과의 관계 작성
    static associate(db) {
        db.User.hasMany(db.MovieReview, { 
            foreignKey: 'user_id', 
            sourceKey: 'user_id'
        });
    }
}