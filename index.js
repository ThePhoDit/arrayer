// @ts-checknpm 
'use strict';

/**
 * Compare two arrays and check if they are the same.
 * @author ThePhoDit
 * @param {any[]} arr1  - First array.
 * @param {any[]} arr2  - Second array.
 * @returns {boolean} Whether they are the same or not.
 */
function equal(arr1, arr2) {
	if (!Array.isArray(arr1)) throw 'First parameter is not an array.'
	if (!Array.isArray(arr2)) throw 'Second parameter is not an array.'
	return arr1.length === arr2.length ? arr1.every((val, i) => val === arr2[i]) : false;
}

/**
 * Arrange various arrays into a single one.
 * @author ThePhoDit
 * @param  {...any[]} arrays - All arrays to arrange.
 * @returns {any[]} Array with all values.
 */
function arrange(...arrays) {
	const array = [];
	for (let i = 0; i < arrays.length; i ++) if (Array.isArray(arrays[i])) array.push(...arrays[i])
	return array;
}

/**
 * Removes the first match of the specified item.
 * @author ThePhoDit
 * @param {string|number|boolean} item - The item to remove.
 * @param {Array<string|number|boolean>} arr - The array from where the item is removed.
 * @returns {any[]} Array without the removed item.
 */
function remove(item, arr) {
	if (!arr.includes(item)) throw 'The item was not found in the provided array.';
	arr.splice(arr.indexOf(item), 1);
	return arr;
}

/**
 * Removes all matches of the specified item.
 * @author ThePhoDit
 * @param {string|number|boolean} item - The item to remove.
 * @param {Array<string|number|boolean>} arr - The array from where the item is removed.
 * @returns {any[]} Array without the removed items.
 */
function removeAll(item, arr) {
	if (!arr.includes(item)) throw 'The item was not found in the provided array.';
	return arr.filter((val) => val !== item);
}

/**
 * Get the longest string of an array.
 * @author ThePhoDit
 * @param {string[]} arr - Array with different words.
 * @returns {{string, number}} The word and the length of it.
 */
function longestString(arr) {
	let word = '';

	for (let i = 0; i < arr.length; i ++) {
		if (typeof arr[i] !== 'string') continue;
		if (arr[i].length > word.length) word = arr[i];
	}

	return {
		word: word,
		length: word.length
	};
}

/**
 * Get the highest value of a numeric array.
 * @author ThePhoDit
 * @param {number[]} arr - Array with different numbers.
 * @returns {number} The highest number.
 */
function highestNumber(arr) {
	if (!arr.every((val) => typeof val === 'number')) throw 'All items have to be numbers.';
	return Math.max(...arr);
}

module.exports = {
	equal,
	arrange,
	remove,
	removeAll,
	longestString,
	highestNumber
};