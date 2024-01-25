const { myCalc } = require('../src/calc')
const expect = require('chai').expect

describe('Basic Test', ()=>{
    it.only('sum - should return correct output with positive values', ()=>{
        const result = myCalc.sum(2,3)
        expect(result).to.equal(5);
    });
    it('sum - should return correct output with negative values', ()=>{
        const result = myCalc.sum(-2,-3)
        expect(result).to.equal(-5);
    });
    it('div - should return Infinity', ()=>{
        const result = myCalc.div(2,0)
        expect(result).to.equal(Infinity);
    });
});