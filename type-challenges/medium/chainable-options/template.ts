/* _____________ 你的代码 _____________ */

/**
 * 1. K extends keyof T 判断是否已经有存在相同的 key，如果存在，则用 Omit 剔除掉
 * 2. Record<K,T> 构造一个type，key为联合类型K中的每个子类型，类型为T
 */
type Chainable<T = {}> = {
	option: <K extends string, V>(key: K, value: V) => K extends keyof T ? Chainable<Omit<T, K> & Record<K, V>> : Chainable<T & Record<K, V>>;
	get: () => T;
};
