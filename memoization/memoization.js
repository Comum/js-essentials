let Memoizer = (function () {
	let cache = {};

	function cacher(func) {
		return function () {
			const key = JSON.stringify(arguments);

			if (cache[key]) {
				return cache[key];
			}

			const value = func.apply(this, arguments);
			cache[key] = value;
			return value;
		};
	}

	return {
		memo: function (func) {
			return cacher(func);
		},
	};
})();

let fibonacci = Memoizer.memo(function (n) {
	if (n < 2) {
		return 1;
	} else {
		return fibonacci(n - 2) + fibonacci(n - 1);
	}
});

console.log(fibonacci(10));
console.log(fibonacci(11));
