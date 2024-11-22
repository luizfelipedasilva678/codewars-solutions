function prime(limit) {
  const numbers = [];
  const primes = [];

  for (let i = 0; i <= limit; i++) {
    numbers[i] = -1;
  }

  for (let i = 2; i <= limit; i++) {
    if (numbers[i] === -1) {
      numbers[i] = 1;
      primes.push(i);

      for (let j = i + i; j <= limit; j += i) {
        numbers[j] = 0;
      }
    }
  }

  return primes;
}