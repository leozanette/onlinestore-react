export async function getCategories() {
  const urlApi = 'https://api.mercadolibre.com/sites/MLB/categories';
  const callApi = await fetch(urlApi);
  const resolveResponse = await callApi.json();
  return resolveResponse;
}

export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const urlApi = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`;
  const callApi = await fetch(urlApi);
  const resolveResponse = await callApi.json();
  return resolveResponse;
}
