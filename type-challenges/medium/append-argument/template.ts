/* _____________ 你的代码 _____________ */

type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R ? (...args: [...P, A]) => R : never;
