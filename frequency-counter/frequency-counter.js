/**
 * Objective
 *
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value
 * squared in the second array. The frequency of values must be the same.
 */

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	let obj1 = {};
	let obj2 = {};

	for (let num of arr1) {
		const numSquared = num * num;
		obj1[numSquared] = obj1[numSquared]++ || 1;
	}

	for (let num of arr2) {
		obj2[num] = obj2[num]++ || 1;
	}

	for (let key in obj1) {
		if (!(key in obj2) || obj1[key] !== obj2[key]) {
			return false;
		}
	}

	return true;
}

console.log('Should be true: ', same([1, 2, 3], [1, 4, 9]));
console.log('Should be false: ', same([1, 2, 3], [1, 4, 4]));
console.log('Should be false: ', same([1, 2, 3], [1, 4]));
