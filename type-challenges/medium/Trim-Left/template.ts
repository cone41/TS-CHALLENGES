/* _____________ 你的代码 _____________ */

// Catch the first character only if it's a space ' ' OR a line break '\n' OR a tab '\t'

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer L}` ? TrimLeft<L> : S;
