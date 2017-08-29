
// Basic Test in JS

let row = '==================';
console.log("Starting test 1");
console.log(row);

// fn 1
function add(a,b) {
  return a + b;
}

expect(add(2,3)).toBe(5);
console.log("Passed successfully!");

expect(add(-2,100)).toBeA('number');
console.log("Passed successfully!");
console.log(row);
console.log(row);
console.log("Starting test 2");
console.log(row);

// fn 2
function capitalizeWord(word) {
  if( !word || typeof word !== 'string') {
    word = '';
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Test case 1 - Given kemal expect Kemal
expect(capitalizeWord('kemal')).toBe('Kemal');

// Test case 2 - Given kemal type is string
expect(capitalizeWord('kemal')).toBeA('string');
// Test case 3 -Given nothing expect empty string
expect(capitalizeWord()).toBe('');
console.log("Passed successfully!");