const { DataTypes, Model } = require("sequelize");

module.exports = ( sequelize ) => {
    class Banner extends Model{};
    return Banner.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        banner_url: DataTypes.STRING,
        is_enable: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'banners',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    
}