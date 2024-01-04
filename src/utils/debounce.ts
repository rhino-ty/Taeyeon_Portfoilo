type DebounceFunction<T extends any[]> = (
  fn: (...args: T) => void,
  delay: number,
) => (...args: T) => void;

// 디바운스 함수
const debounce: DebounceFunction<any> = (fn, delay) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default debounce;
