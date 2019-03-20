export const identity = x => x;
export const equals = a => b => a === b;
export const always = val => () => val;
export const apply = (data, fn) => fn(data);
export const pipe = (...fns) => data => fns.reduce(apply, data);
export const pipe$ = (data, ...fns) => () => fns.reduce(apply, data);
export const compose = (...fns) => data => fns.reduceRight(apply, data);
export const memoize = fn => (cache => x => (x in cache) ? cache[x] : (cache[x] = fn(x)))(Object.create(null));
export const multiple = (...args) => fn => args.each(val => fn(val));
