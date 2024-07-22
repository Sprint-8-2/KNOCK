/**
 * JSON.parse 가능 여부 체크용 함수
 * @param jsonString
 * @returns boolean JSON.parse 가능 여부
 */
const isValidJSON = (jsonString: string) => {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    return false;
  }
};

const localStorageUtil = {
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    const result = localStorage.getItem(key);
    if (result === null) {
      return null;
    }

    if (!isValidJSON(result)) {
      // json parse error
      return null;
    }

    return JSON.parse(result);
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default localStorageUtil;
