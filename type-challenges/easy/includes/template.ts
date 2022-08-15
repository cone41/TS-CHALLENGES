/* _____________ 你的代码 _____________ */

import type { Equal } from '@type-challenges/utils';

export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? (Equal<First, U> extends true ? true : Includes<Rest, U>) : false;
