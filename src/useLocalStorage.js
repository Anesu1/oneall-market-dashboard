import { createContext, useContext, useMemo , useState} from "react";
import { useNavigate } from "react-router-dom";


export const useLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const value = window.localStorage.getItem(keyName);
        if (value) {
          return JSON.parse(value);
        }  window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      } catch (err) {
        return defaultValue;
      }
    });
    const setValue = (newValue) => {
      try {
        window.localStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (err) {
        console.log("ddddddd")
      }
      setStoredValue(newValue);
    };
    return [storedValue, setValue];
  };



