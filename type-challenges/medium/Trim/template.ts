/* _____________ Your Code Here _____________ */
type Space = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${Space}${infer M}${Space}` ? Trim<M> : S extends `${Space}${infer M}` ? Trim<M> : S extends `${infer M}${Space}` ? Trim<M> : S;
