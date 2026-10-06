import * as userService from '../services/userService.js';
import { validateUser } from '../utils/validators.js';
export async function getAll(req, res) {
  const users = await userService.getAllUsers();
  res.json(users);
}
export async function getById(req, res) {
  const user = await userService.getUserById(Number(req.params.id));
  user ? res.json(user) : res.status(404).json({ error: 'Not found' });
}
export async function create(req, res) {
  const error = validateUser(req.body);
  if (error) return res.status(400).json({ error });
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
}
export async function update(req, res) {
  const user = await userService.updateUser(Number(req.params.id), req.body);
  user ? res.json(user) : res.status(404).json({ error: 'Not found' });
}
export async function remove(req, res) {
  const user = await userService.deleteUser(Number(req.params.id));
  user ? res.json(user) : res.status(404).json({ error: 'Not found' });
}