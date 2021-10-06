import { useState, useEffect } from "react"

export function useLocalStorage() {

  const [storedValue, setStoredValue] = useState(
    JSON.parse(localStorage.getItem("content")))


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue])

};

// export function useLocalStorage(key, initialValue) {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.log(error);
//       return initialValue;
//     }
//   });
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(storedValue));
//   }, [storedValue])

//   return [storedValue, setStoredValue]
// };
