const { myCalc } = require('../src/calc');
const expect = require('chai').expect
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

// describe('Basic Test', ()=>{
//     it.only('sum - should return correct output with positive values', ()=>{
//         const result = myCalc.sum(2,3)
//         expect(result).to.equal(5);
//     });
//     it('sum - should return correct output with negative values', ()=>{
//         const result = myCalc.sum(-2,-3)
//         expect(result).to.equal(-5);
//     });
//     it('div - should return correct values', ()=>{
//         const result = myCalc.div(4, 2)
//         expect(result).to.equal(2);
//     });
//     it('div - should return Infinity', ()=>{
//         const result = myCalc.div(2,0)
//         expect(result).to.equal(Infinity);
//     });
// });

describe('spy calculator method callback tests', ()=>{
    it('myCalc - should call sum once with args 1 & 2', ()=>{
        // Arrange
        const spy = sinon.spy(myCalc, 'sum')
        // Act
        myCalc.sum(1, 2)
        sinon.assert.calledOnce(spy)
        // Assert
        sinon.assert.calledWith(spy, 1, 2)
        
    });
})