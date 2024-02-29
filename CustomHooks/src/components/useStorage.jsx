import React, { useState, useEffect } from 'react';

const useStorage = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;
  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return [value, updateValue];
};

export default useStorage;