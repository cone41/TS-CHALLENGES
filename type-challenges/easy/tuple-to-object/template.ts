type TupleToObject<T extends readonly (number | string | symbol)[], S extends T[number] = T[number]> = {
	[P in S]: P;
};
