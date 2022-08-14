type TupleToObject<T extends readonly any[], S extends T[number] = T[number]> = {
	[P in S]: P;
};
