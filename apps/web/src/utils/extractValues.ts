export function extractTruthyValues<T extends object>(obj: T): T[keyof T][] {
  return Object.values(obj).filter((value) => !!value);
}
