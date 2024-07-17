import moment from 'moment';

// parse json with try catch and support generic types
export const parseJSON = <T>(stringifiedJson: string): T | null => {
  let parsed: T | null = null;

  try {
    parsed = JSON.parse(stringifiedJson) as T;
  } catch (err) {
    console.error('parseJSON: %s', stringifiedJson);
  }

  return parsed;
};

// write to local storage with out risk of unavailable window
export const writeToLocalStorage = (key: string, value: unknown): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value ?? ''));
  }
};

// get and parse a value from local storage by its key
export const readFromLocalStorage = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
    const item: string | null = localStorage.getItem(key);

    if (!item) {
      return null;
    }

    return parseJSON<T>(item) ?? null;
  }
  return null;
};

// remove a value from local storage by key
export const removeFromLocalStorage = (key: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

// clone an object with generic type
export const clone = <T>(data: T): T => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return data;
  }
};

// create new date string from time stamp
export const convertTimestampToDate = (timestamp: number): string => {
  return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
};

// calculate average of an array of numbers
export const calculateAverage = (numbers: number[]): number => {
  if (numbers.length === 0) {
    return 0; // Return 0 for an empty array
  }

  const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
  const average: number = sum / numbers.length;
  return Math.round(average);
};
