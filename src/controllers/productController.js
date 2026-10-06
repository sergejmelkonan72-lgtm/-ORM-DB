import * as productService from '../services/productService.js';
import { validateProduct } from '../utils/validators.js';
export async function getAll(req, res) {
  const products = await productService.getAllProducts();
  res.json(products);
}
export async function getById(req, res) {
  const product = await productService.getProductById(Number(req.params.id));
  product ? res.json(product) : res.status(404).json({ error: 'Not found' });
}
export async function create(req, res) {
  const error = validateProduct(req.body);
  if (error) return res.status(400).json({ error });
  const product = await productService.createProduct(req.body);
  res.status(201).json(product);
}
export async function update(req, res) {
  const product = await productService.updateProduct(Number(req.params.id), req.body);
  product ? res.json(product) : res.status(404).json({ error: 'Not found' });
}
export async function remove(req, res) {
  const product = await productService.deleteProduct(Number(req.params.id));
  product ? res.json(product) : res.status(404).json({ error: 'Not found' });
}