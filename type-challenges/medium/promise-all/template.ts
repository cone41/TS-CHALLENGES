/* _____________ 你的代码 _____________ */

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{ [key in keyof T]: T[key] extends Promise<infer P> ? P : T[key] }>;
