export async function getCategories() {
  // implement here
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = (await response).json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = (await response).json();
  return data;
}

