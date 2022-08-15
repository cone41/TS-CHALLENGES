// 在类型系统里实现通用的 ```Array.push``` 。

/* _____________ 你的代码 _____________ */

type Push<T extends any[], U> = [...T, U];
