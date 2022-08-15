/* _____________ 你的代码 _____________ */

// 一个通用的 DeepReadonly 需要为所有原始数据类型添加 readonly 修饰符，而对于函数元素、RegExp 等对象元素来说并不需要，因此必然会分情况讨论。面对嵌套的 Object 也必然会使用递归。

// T[P] extends (...args: any) => any ? T[P] 对 function 做特殊处理，不需要设置 readonly
type DeepReadonly<T> = {
	readonly [P in keyof T]: T[P] extends keyof any ? T[P] : T[P] extends (...args: any) => any ? T[P] : DeepReadonly<T[P]>;
};
