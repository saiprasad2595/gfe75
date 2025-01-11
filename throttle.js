/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
  let isLoading = false;

  return function (...args) {
    if (isLoading) {
      return;
    }
    if (!isLoading) {
      func.apply(this, args);
      isLoading = true;
    }

    setTimeout(() => {
      isLoading = false;
    }, wait);
  };
}
