const fibo = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n-2) + fibo(n-1);
}

console.log(fibo(30));

let fibonacci = function () {
  let memo = [0, 1];
  let fib = function (n) {
    if (memo[n] === undefined) {
      memo[n] = fib(n - 2) + fib(n - 1)
    }
    return memo[n]
  }
  return fib;
}()
console.log(fibonacci(2));
