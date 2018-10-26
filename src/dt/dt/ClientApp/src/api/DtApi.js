export async function getData() {
  const response = await fetch("https://localhost:5001/dt/api/v1");
  if(response.ok) return await response.json();
  else throw `could not load data, server response: ${response.status}`;
}