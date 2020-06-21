const isAnagram = require('./anagram');

test('isAnagram function exists',() => {
    expect(typeof isAnagram).toEqual('function');
});

test('cinema is anagram of iceman',() => {
    expect(isAnagram('cinema','iceman')).toBeTruthy();
    
});

test('Dormitory is anagram of dirty room##',() => {
    expect(isAnagram('Dormitory','dirty room##')).toBeTruthy();
});

test('Hello is NOT anagram of Alloha##',() => {
    expect(isAnagram('Hello','Alloha')).toBeFalsy();
});

