const API_URI = "https://fakestoreapi.com";

export async function getProduct() {
  const res = await fetch(`${API_URI}/products`);

  if (!res.ok) throw Error("Failed getting Products");

  const data = await res.json();

  return data;
}

export async function singleProduct(id) {
  try {
    const response = await fetch(`${API_URI}/products/${id}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch single product. HTTP status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single product", error);
    throw new Error("Error fetching data");
  }
}

export async function prodCategory(category) {
  try {
    const response = await fetch(`${API_URI}/products/categories/${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product categories", error);
    throw new Error("Error fetching data");
  }
}
