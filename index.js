// @ts-checknpm 
'use strict';

/**
 * Compare two arrays and check if they are the same.
 * @author ThePhoDit
 * @param {any[]} arr1  - First array.
 * @param {any[]} arr2  - Second array.
 * @returns {boolean}
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
 * @returns {any[]}
 */
function arrange(...arrays) {
	const array = [];
	for (let i = 0; i < arrays.length; i ++) if (Array.isArray(arrays[i])) array.push(...arrays[i])
	return array;
}

module.exports = { equal, arrange };