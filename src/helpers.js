export const compareTextAZ = (a, b) => {
  if (a.text < b.text) {
    return -1;
  }
  if (a.text > b.text) {
    return 1;
  }
  return 0;
};

export const compareTextZA = (a, b) => {
  if (a.text < b.text) {
    return 1;
  }
  if (a.text > b.text) {
    return -1;
  }
  return 0;
};

export const shuffleArray = (array) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
};
