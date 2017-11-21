// https://www.codingame.com/ide/puzzle/temperatures

const n = parseInt(readline()); // the number of temperatures to analyse
const inputs = readline().split(' ').map((n) => parseInt(n));

Array.isArray(inputs) && !isNaN(inputs[0]) ? print(getClosestToZero(inputs)) : print(0);

function getClosestToZero(nums) {
  let closestToZero = Number.MAX_SAFE_INTEGER;
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // if nums are equally close to zero return positive num (ex: -5 and 5, return 5)
    // however if both nums are negative (-10 and -10, return -10)
    if (Math.abs(num) === Math.abs(closestToZero)) {
      closestToZero = num === closestToZero ? closestToZero : Math.abs(closestToZero);
    }
    // keep lower num
    if (Math.abs(num) < Math.abs(closestToZero)) {
      closestToZero = num;
    }
  }

  return closestToZero;
}