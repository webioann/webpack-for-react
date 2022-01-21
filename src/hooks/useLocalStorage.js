import { useState, useEffect } from "react"

export function useLocalStorage() {

  const [storedValue, setStoredValue] = useState(
    JSON.parse(localStorage.getItem("content")))


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue])

};

