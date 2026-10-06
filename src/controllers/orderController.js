import * as orderService from '../services/orderService.js';
import { validateOrder } from '../utils/validators.js';
export async function getAll(req, res) {
  const orders = await orderService.getAllOrders();
  res.json(orders);
}
export async function getById(req, res) {
  const order = await orderService.getOrderById(Number(req.params.id));
  order ? res.json(order) : res.status(404).json({ error: 'Not found' });
}
export async function create(req, res) {
  const error = validateOrder(req.body);
  if (error) return res.status(400).json({ error });
  const order = await orderService.createOrder(req.body);
  res.status(201).json(order);
}
export async function update(req, res) {
  const order = await orderService.updateOrder(Number(req.params.id), req.body);
  order ? res.json(order) : res.status(404).json({ error: 'Not found' });
}
export async function remove(req, res) {
  const order = await orderService.deleteOrder(Number(req.params.id));
  order ? res.json(order) : res.status(404).json({ error: 'Not found' });
}