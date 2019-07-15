export const getComputedNutritionalValues = (
  source,
  { action, selectedRow, food }
) => {
  const index = source.findIndex(obj => obj.label === selectedRow);
  if (index !== -1) {
    action === "INCREMENT" && (food[index].counter += 1);
    action === "DECREMENT" && (checkIfPositive(food[index].counter) && (food[index].counter -= 1));
    food[index].value = source[index].value * food[index].counter;
    return food;
  }
  return source;
};

export const saveDiet = (food: any) => {
  const data = food && mapFromLocalToRemote(food);
  // TODO: zapisywanie
};

const mapFromLocalToRemote = (food: any) =>
  food.map(obj => ({ value: obj.value, label: obj.label }));

const checkIfPositive = (counter: number) => counter > 0;
