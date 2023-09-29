import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import dbConfig from "../config/db.config";


class Banner extends Model<InferAttributes<Banner>, InferCreationAttributes<Banner, { omit: 'id'}>>{
    declare id: number;
    declare name: string;
    declare banner_url: string;
    declare is_enable?: boolean;
};

Banner.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
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

export default Banner;