/* _____________ Your Code Here _____________ */

type MyCapitalize<S extends string> = S extends `${infer F}${infer L}` ? `${Uppercase<F>}${L}` : S;
