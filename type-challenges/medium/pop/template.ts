/* _____________ 你的代码 _____________ */

type Pop<T extends any[]> = T extends [...infer F, unknown] ? F : never;
type Shift<T extends any[]> = T extends [unknown, ...infer L] ? L : never;
type Push<T extends any[], K> = [...T, K];
type Unshift<T extends any[], K> = [K, ...T];
