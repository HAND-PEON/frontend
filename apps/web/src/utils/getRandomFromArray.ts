export const getRandomFromArray = <T extends readonly any[]>(
  array: T,
): T[number] | null => {
  if (array.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};
