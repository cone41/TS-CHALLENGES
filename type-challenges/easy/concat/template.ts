// ### 题目

// 在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

/* _____________ 你的代码 _____________ */

type Concat<T extends any[], U extends any[]> = [...T, ...U];
