import { Product } from '../models/index.js';
export async function getAllProducts() {
  return Product.findAll();
}
export async function getProductById(id) {
  return Product.findByPk(id);
}
export async function createProduct(data) {
  return Product.create(data);
}
export async function updateProduct(id, data) {
  const product = await Product.findByPk(id);
  if (!product) return null;
  await product.update(data);
  return product;
}
export async function deleteProduct(id) {
  const product = await Product.findByPk(id);
  if (!product) return null;
  await product.destroy();
  return product;
}