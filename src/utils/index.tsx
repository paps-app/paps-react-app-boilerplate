/**
 *
 * @param func Callback function to throttle
 * @param threshold
 * @param scope Is the
 */
export function throttle<T extends (...args: any) => void>(
  func: T,
  threshold: number = 250,
  scope?: any
): T {
  let last: number, deferTimer: any;
  return function(this: any) {
    let context = scope || this;

    let now = Date.now(),
      args: any = arguments;
    if (last && now < last + threshold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function() {
        last = now;
        func.apply(context, args);
      }, threshold);
    } else {
      last = now;
      func.apply(context, args);
    }
  } as T;
}
