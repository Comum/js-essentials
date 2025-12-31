[Home](../README.md) > Time Complexity

# Time Complexity

Time complexity is an analysis that can be done to functions to try and understand the amount of time they will take to run. In order to categorize function's time complexity, a formal way was thought of. The way is called Big O notation.

## Big O notation

Big O notation basically gives up representation of how the function's time to run will vary through executions.

One important note is that Big O does not care about the amount of actions per say. It cares about the overall complexity. What does this mean? You will not estimate something as O(10), if you have 10 actions in your O(1) you will not increase the Big O estimate, if it's constant, then you just refer to it as O(1).

Here's a few example of Big O:

- O(1)
- O(n)
- O(n^2)
- O(log(n))
- O(n\*log(n))

### O(1)

O(1) means that the function is constant. No matter how you change the args, it will take constant time to run.

```
function sum(a, b) {
  return a + b;
}
```

### O(n)

O(n) means that depending on the arguments the function will take longer. In this case the time growth will be linear. Example loop.

```
function sumTo(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }

  return sum;
}
```

Sometimes you can optimize to bring the time complexity down from linear growth to constant. The function above could be:

```
function sumTo(num) {
  return (num * (num + 1)) / 2;
}
```

### O(n^2)

O(n^2) means that depending on the arguments the function will take longer. In this case the time growth will be quadratically. Example loop with nested loop.

```
function findDuplicates(arr) {
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}
```

### O(log(n))

Logs are a bit complicated to explain. For O(log(n)) an example would be binary search ( for binary search, the input array needs to be sorted):

```
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // target not found
}
```

### O(n\*log(n))

For O(log(n)) an example would be merge sort:

```
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
```
