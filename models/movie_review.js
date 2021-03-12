const Sequelize = require('sequelize');

module.exports = class MovieReview extends Sequelize.Model {
    // 테이블 설정
    static init(sequelize) {
        return super.init({
            review_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            movie_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            user_rating: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            comment: {
                type: Sequelize.STRING(20),
            },
            created_time: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: "MovieReview",
            tableName: "movie_review",
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    // 다른 모델과의 관계 작성
    static associate(db) {
        db.MovieReview.belongsTo(db.MovieInfo, { 
            foreignKey: 'movie_id', 
            targetKey: 'movie_id'
        });
        db.MovieReview.belongsTo(db.User, { 
            foreignKey: 'user_id', 
            targetKey: 'user_id'
        });
    }
}