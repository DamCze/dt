export const getComputedNutritionalValues = (
  source,
  { action, selectedRow, food }
) => {
  const index = source.findIndex(obj => obj.label === selectedRow);
  if (index !== -1) {
    action === "INCREMENT" && (food[index].counter += 1);
    action === "DECREMENT" && (food[index].counter -= 1);
    food[index].value = source[index].value * food[index].counter;
    return food;
  }
  return source;
};
