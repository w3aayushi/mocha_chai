const { add, sub } = require('../src/app');
const expect = require('chai').expect;

// BDD

describe('Suite 1', ()=>{
    afterEach(()=>{
        console.log('afterEach')
    });
    beforeEach(()=>{
        console.log('beforeEach')
    });
    after(()=>{
        console.log('after')
    });
    before(()=>{
        console.log('before')
    });
    it('add(2,3) should return 5',()=>{
        console.log('it1')
    });
    it ('add(3,3) should return 6',()=>{
        console.log('it2')
    });
})

// TDD
// const { suite, test, suiteSetup, suiteTeardown, setup, teardown} = require('mocha')

// suite('Suite 2', ()=>{
//     suiteSetup(()=>{ // before
//         console.log('suiteSetup')
//     });
//     suiteTeardown(()=>{ // after
//         console.log('suiteTeardown')
//     });
//     setup(()=>{ // beforeEach
//         console.log('setup')
//     });
//     teardown(()=>{ // afterEach
//         console.log('teardown')
//     });
//     test('add(3,3) should return 6',()=>{
//         console.log('test1')
//     });
//     test('add(2,3) shhhould return 5',()=>{
//         console.log('test2')
//     })
// })