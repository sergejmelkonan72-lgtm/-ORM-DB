import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  }
});
export default Order;