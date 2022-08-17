/* _____________ 你的代码 _____________ */

type LookUp<U, T> = U extends { type: T } ? U : never;
