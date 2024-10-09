import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

const storeDataToMMKV = (key: string, value: string | number | boolean) => {
  try {
    storage.set(key, value);
  } catch (e) {
    console.log("error saving data to MMKV : ", e);
  }
};

const storeObjectDataToMMKV = (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    storage.set(key, jsonValue);
  } catch (e) {
    console.log("error saving object data to MMKV : ", e);
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
        return storage.getString(key);
      case "number":
        return storage.getNumber(key);
      case "boolean":
        return storage.getBoolean(key);
      default:
        return storage.getString(key);
    }
  } catch (e) {
    console.log("error getting data from MMKV : ", e);
  }
};

const getObjectDataToMMKV = (key: string) => {
  try {
    const jsonValue = storage.getString(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("error getting object data from MMKV : ", e);
  }
};

const removeDataToMMKV = (key: string) => {
  try {
    storage.delete(key);
    console.log(key + " removed from MMKV");
  } catch (e) {
    console.log("error removing data from MMKV : ", e);
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
