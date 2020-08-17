declare module 'arrayer' {
	export function equal(arr1: any[], arr2: any[]): boolean;
	export function arrange(arrays: any[][]): any[];
	export function remove(item: string | number | boolean, arr: (string | number | boolean)[]): any[];
	export function removeAll(item: string | number | boolean, arr: (string | number | boolean)[]): any[];
	export function longestString(arr: string[]): {string, number};
	export function highestNumber(arr: number[]): number;
}