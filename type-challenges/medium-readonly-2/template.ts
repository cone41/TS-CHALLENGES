// = keyof T 相当于给 K 设置默认值
type MyReadonly2<T, K extends keyof T = keyof T> = {
	readonly [P in K]: T[P];
} & {
	[S in Exclude<keyof T, K>]: T[S];
};
