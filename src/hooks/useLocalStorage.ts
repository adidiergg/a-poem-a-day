import { stored } from "@diffusionstudio/vits-web";
import { read } from "fs";
import { useCallback, useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type useLocalStorageOptions<T> = {
  serializer?: (value: T) => string;
  desarializer?: (value: string) => T;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === "undefined";

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  options: useLocalStorageOptions<T> = {},
): [T, Dispatch<SetStateAction<T>>, () => void] {
  const { initializeWithValue = true } = options;

  const serializer = useCallback<(value: T) => string>(
    (value) => {
      if (options.serializer) {
        return options.serializer(value);
      }
      return JSON.stringify(value);
    },
    [options],
  );
  
  useEffect(()=>{
    window.addEventListener('storage',handleStorageChange);
    return () => {
      window.removeEventListener('storage',handleStorageChange);
    }
  },[])
  

  const deserializer = useCallback<(value: string) => T>(
    (value) => {
      if (options.desarializer) {
        return options.desarializer(value);
      }
      if (value === "undefined") {
        return undefined as unknown as T;
      }

      const defaultValue =
        initialValue instanceof Function ? initialValue() : initialValue;

      let parsed: unknown;
      try {
        parsed = JSON.parse(value);
      } catch (error) {
        return defaultValue;
      }
      return parsed as T;
    },
    [options, initialValue],
  );

  const readValue = useCallback((): T => {
    const initialValueToUse =
      initialValue instanceof Function ? initialValue() : initialValue;
    if (IS_SERVER) {
      return initialValueToUse;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? deserializer(item) : initialValueToUse;
    } catch (error) {
      return initialValueToUse;
    }
  }, [initialValue, key, deserializer]);

  const [storedValue, setStoredValue] = useState(() => {
    if (initializeWithValue) {
      return readValue();
    }
    return initialValue instanceof Function ? initialValue() : initialValue;
  });

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    try {
      const newValue = value instanceof Function ? value(readValue()) : value;
      window.localStorage.setItem(key, serializer(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new Event('storage'));
    } catch (error) { }
  };

  const removeValue = () => {
    const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
    window.localStorage.removeItem(key);
    setStoredValue(defaultValue);
    window.dispatchEvent(new Event('storage'));

  }
  
  const handleStorageChange = useCallback(
      (event: StorageEvent)=>{

        setStoredValue(readValue());
      }
    ,[key,readValue]);
  

return [storedValue, setValue, removeValue];
}


