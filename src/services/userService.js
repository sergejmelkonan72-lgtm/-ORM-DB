import bcrypt from 'bcrypt';
import { User } from '../models/index.js';
export async function getAllUsers() {
  return User.findAll({ attributes: { exclude: ['password'] } });
}
export async function getUserById(id) {
  return User.findByPk(id, { attributes: { exclude: ['password'] } });
}
export async function createUser(data) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await User.create({ ...data, password: hashedPassword });
  const { password, ...result } = user.toJSON();
  return result;
}
export async function updateUser(id, data) {
  const user = await User.findByPk(id);
  if (!user) return null;
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  await user.update(data);
  const { password, ...result } = user.toJSON();
  return result;
}
export async function deleteUser(id) {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.destroy();
  const { password, ...result } = user.toJSON();
  return result;
}