export async function getDietData() {
  const URI = "https://localhost:5001/dt/api/v1";
  const response = await fetch(URI);
  if (response.ok) {
    return await response.json();
  }

  throw `could not load data, server response: ${response.statusText}`;
}
