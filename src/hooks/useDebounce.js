import { useEffect, useState } from "react";

// Данная функция позволяет делать небольшую задержку при выполнении каких либо действий
// В данном примере при выполнении поиска фильмов, что бы не делать получения данных при каждом введённом символе
// это будет выполнятся через определённое время после оканчания ввода символов
export function useDebounce(value, delay=3000) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay])

  return debouncedValue;
}