const reverseString = require('./reversestring')

test('reverseString function extists', () =>{
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('HELLO')).toEqual('olleh');
})