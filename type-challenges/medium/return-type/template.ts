/* _____________ 你的代码 _____________ */

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never;
