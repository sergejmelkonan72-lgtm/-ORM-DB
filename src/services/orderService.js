import { Order } from '../models/index.js';
export async function getAllOrders() {
  return Order.findAll();
}
export async function getOrderById(id) {
  return Order.findByPk(id);
}
export async function createOrder(data) {
  return Order.create(data);
}
export async function updateOrder(id, data) {
  const order = await Order.findByPk(id);
  if (!order) return null;
  await order.update(data);
  return order;
}
export async function deleteOrder(id) {
  const order = await Order.findByPk(id);
  if (!order) return null;
  await order.destroy();
  return order;
}