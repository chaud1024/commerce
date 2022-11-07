import { useEffect, useState } from 'react'

const useDebounce = <T = any>(value: T, delay = 600) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(() => value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    // 600ms 동안 값이 바뀌는 것을 무시함

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
  // 600ms동안 값이 바뀌는 일이 없다면 해당 값을 리턴
}

export default useDebounce
