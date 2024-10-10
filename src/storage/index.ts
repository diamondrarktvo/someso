import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

const storeDataToMMKV = (key: string, value: string | number | boolean) => {
  try {
    storage.set(key, value);
    return Promise.resolve(true);
  } catch (e) {
    console.log("error saving data to MMKV : ", e);
    return Promise.resolve(false);
  }
};

const storeObjectDataToMMKV = (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    storage.set(key, jsonValue);
    return Promise.resolve(true);
  } catch (e) {
    console.log("error saving object data to MMKV : ", e);
    return Promise.resolve(false);
  }
};

/**
 *
 * @param key
 * @param typeOfData
 * @returns
 */
const getDataToMMKV = (
  key: string,
  typeOfData: "string" | "boolean" | "number",
) => {
  try {
    switch (typeOfData) {
      case "string":
        let valueString = storage.getString(key);
        return Promise.resolve(valueString);
      case "number":
        let valueNumber = storage.getNumber(key);
        return Promise.resolve(valueNumber);
      case "boolean":
        let valueBoolean = storage.getBoolean(key);
        return Promise.resolve(valueBoolean);
      default:
        let valueDefault = storage.getString(key);
        return Promise.resolve(valueDefault);
    }
  } catch (e) {
    console.log("error getting data from MMKV : ", e);
    return Promise.resolve(false);
  }
};

const getObjectDataToMMKV = (key: string) => {
  try {
    let jsonValue = storage.getString(key);
    let value = jsonValue != null ? JSON.parse(jsonValue) : null;
    return Promise.resolve(value);
  } catch (e) {
    console.log("error getting object data from MMKV : ", e);
    return Promise.resolve(false);
  }
};

const removeDataToMMKV = (key: string) => {
  try {
    storage.delete(key);
    console.log(key + " removed from MMKV");
    return Promise.resolve();
  } catch (e) {
    console.log("error removing data from MMKV : ", e);
    return Promise.resolve(false);
  }
};

const getAllMMKVKeys = () => {
  const keys = storage.getAllKeys();
  return keys;
};

export {
  getAllMMKVKeys,
  storeDataToMMKV,
  getDataToMMKV,
  storeObjectDataToMMKV,
  getObjectDataToMMKV,
  removeDataToMMKV,
};
