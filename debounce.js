/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timer;
  return function (...args) {
    const that = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(that, args);
    }, wait);
  };
}
