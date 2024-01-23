const { add, sub } = require('../src/app');
const expect = require('chai').expect;


// BDD
describe ('Suite 1',()=>{
    it('add(2,3) should return 5',()=>{
        expect(add(2,3)).to.be.equal(5);
    })
})

// context ('Suite 2',()=>{
//     specify('add(3,3) should return 6',()=>{
//         expect(add(3,3)).to.be.equal(6);
//     })
// })


// TDD
// const { suite, test } = require('mocha');
// use .mocharc.js file if you don't want to use the require statement (for now it will only work for TDD, i.e., suite block).

// suite('Suite 3',()=>{
//     test('add(4,3) should return 7',()=>{
//         expect(add(4,3)).to.be.equal(7);
//     })
// })


// const assert = require('chai').assert
// const app = require('../app')

// describe('Unit test cases for App', function () {
//     describe('for string',function(){
//         it('return hello', function(){
//             assert.equal(app.sayHello(),'hello')
//         })
//         it('return type string', function(){
//             assert.typeOf(app.sayHello(),'string')
//         })
//     })
//     describe('for numbers',function(){
//         it('greater than 5', function(){
//             assert.isAbove(app.addNumbers(4,2),5)
//         })
//         it('return type number', function(){
//             assert.typeOf(app.addNumbers(4,2),'number')
//         })
//     })
    
// })
