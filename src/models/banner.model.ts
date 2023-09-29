import { DataTypes, Model } from "sequelize";
import dbConfig from "../config/db.config";


class Banner extends Model{};

const BannerModel = Banner.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    banner_url: DataTypes.STRING,
    is_enable: DataTypes.BOOLEAN,
}, {
    sequelize: dbConfig,
    modelName: 'banners',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default BannerModel;