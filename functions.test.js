const functions = require('./functions.js');

// run more than once
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// run just once
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const's for both tests above
// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking names...');

describe('Checking Name', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    })

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    })
});

test('Adds 2 to 2 equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 to 2 NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

test('Should be Null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName:'Brad',
        lastName:'Traversy'
    });
});

// Less Than and Greater Than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect (load1 + load2).toBeLessThan(1600);
});

test('There is no I in team', () => {
    expect ('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});



// Working with assync data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });

// Assync await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
