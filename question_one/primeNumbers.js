function isPrime(n) {
  if (n < 1) return false;
  else{
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
}

console.log(isPrime(1))