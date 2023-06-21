type RecordKey = string | number | symbol;

export function arrayToObj<T extends Record<RecordKey, any>>(
  array: T[],
  keyName: keyof T,
  valueName: keyof T,
) {
  const result: Record<RecordKey, T[keyof T]> = Object.create(null);
  array.forEach((one) => {
    Object.assign(result, { [one[keyName]]: one[valueName] });
  });
  return result;
}
