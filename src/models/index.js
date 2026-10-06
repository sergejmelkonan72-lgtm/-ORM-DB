import sequelize from '../config/database.js';
import User from './User.js';
import Product from './Product.js';
import Order from './Order.js';
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });
export { sequelize, User, Product, Order };