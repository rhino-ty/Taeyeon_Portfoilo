export default function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): T {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecuted = 0;

  function wrapper(...args: Parameters<T>): ReturnType<T> | undefined {
    const now = Date.now();

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    if (now - lastExecuted < delay) {
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    } else {
      lastExecuted = now;
      return func.apply(null, args);
    }
  }

  return wrapper as T;
}
