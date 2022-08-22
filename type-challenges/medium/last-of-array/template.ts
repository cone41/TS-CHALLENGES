/* _____________ 你的代码 _____________ */

type Last<T extends any[]> = T extends [...infer F, infer L] ? L : never;
