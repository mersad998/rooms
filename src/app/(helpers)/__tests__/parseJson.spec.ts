import { parseJSON, writeToLocalStorage, readFromLocalStorage, removeFromLocalStorage } from '../globalHelpers';

describe('parseJSON', () => {
  it('should parse valid JSON string', () => {
    const jsonString = '{"key": "value"}';
    const parsedResult = parseJSON<{ key: string }>(jsonString);

    expect(parsedResult).toEqual({ key: 'value' });
  });

  it('should return null for invalid JSON string', () => {
    const invalidJsonString = 'invalid_json';
    const parsedResult = parseJSON(invalidJsonString);

    expect(parsedResult).toBeNull();
  });
});

describe('writeToLocalStorage', () => {
  it('should write to local storage', () => {
    const key = 'testKey';
    const value = { data: 'testData' };

    writeToLocalStorage(key, value);

    // Check if the value is written to local storage
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));
  });
});

describe('readFromLocalStorage', () => {
  it('should read and parse value from local storage', () => {
    const key = 'testKey';
    const value = { data: 'testData' };

    localStorage.setItem(key, JSON.stringify(value));

    // Check if the value is read and parsed correctly from local storage
    const retrievedValue = readFromLocalStorage<typeof value>(key);
    expect(retrievedValue).toEqual(value);
  });

  it('should return null for non-existent key', () => {
    const nonExistentKey = 'nonExistentKey';

    // Check if null is returned for a non-existent key
    const retrievedValue = readFromLocalStorage(nonExistentKey);
    expect(retrievedValue).toBeNull();
  });
});

describe('removeFromLocalStorage', () => {
  it('should remove value from local storage', () => {
    const key = 'testKey';
    const value = { data: 'testData' };

    localStorage.setItem(key, JSON.stringify(value));

    // Check if the value is initially present
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));

    // Remove the value from local storage
    removeFromLocalStorage(key);

    // Check if the value is removed from local storage
    expect(localStorage.getItem(key)).toBeNull();
  });
});
