export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === 'string' && re.test(email);
}
export function validatePassword(password) {
  if (typeof password !== 'string') return false;
  if (password.length < 6) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
}
export function validateUser(data) {
  if (!data.name || typeof data.name !== 'string') return 'name is required';
  if (!validateEmail(data.email)) return 'invalid email';
  if (!validatePassword(data.password)) return 'password must be at least 6 chars with 1 uppercase and 1 digit';
  return null;
}
export function validateProduct(data) {
  if (!data.name || typeof data.name !== 'string') return 'name is required';
  if (typeof data.price !== 'number' || data.price <= 0) return 'price must be a positive number';
  return null;
}
export function validateOrder(data) {
  if (!data.userId || typeof data.userId !== 'number') return 'userId is required';
  if (!Array.isArray(data.productIds) || data.productIds.length === 0) return 'productIds must be a non-empty array';
  return null;
}