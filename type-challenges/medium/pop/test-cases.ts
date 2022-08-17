/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>, Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>];

type cases1 = [Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>, Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>];

type cases2 = [Expect<Equal<Push<[3, 2, 1], 4>, [3, 2, 1, 4]>>, Expect<Equal<Push<['a', 'b', 'c', 'd'], 'e'>, ['a', 'b', 'c', 'd', 'e']>>];

type cases3 = [Expect<Equal<Unshift<[3, 2, 1], 4>, [4, 3, 2, 1]>>, Expect<Equal<Unshift<['a', 'b', 'c', 'd'], 'e'>, ['e', 'a', 'b', 'c', 'd']>>];
