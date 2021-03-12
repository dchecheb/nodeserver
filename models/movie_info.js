const Sequelize = require('sequelize');

module.exports = class MovieInfo extends Sequelize.Model {
    // 테이블 설정
    static init(sequelize) {
        return super.init({
            movie_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING(20),
            },
            subtitle: {
                type: Sequelize.STRING(20),
            },
            pubddate: {
                type: Sequelize.DATE,
            },
            director: {
                type: Sequelize.STRING(20),
            },
            actor: {
                type: Sequelize.STRING(20),
            },
            genre: {
                type: Sequelize.STRING(20),
            },
            rated_num: {
                type: Sequelize.INTEGER,
            },
            user_rating: {
                type: Sequelize.FLOAT,
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: "MovieInfo",
            tableName: "movie_info",
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    // 다른 모델과의 관계 작성
    static associate(db) {
        console.log(db.MovieInfo)
        db.MovieInfo.hasMany(db.MovieReview, { 
            foreignKey: 'movie_id', 
            sourceKey: 'movie_id'
        });
    }
}