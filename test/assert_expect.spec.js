const { expect, assert } = require('chai')
const should = require('chai').should()

describe('Chai Assertions', ()=>{
    const a = 20,
        arr = [30, 40, 50],
        obj = { name: 'Avi', age: 9 },
        myFunc = (a, b) => a + b,
        isTrue = true,
        nan = NaN,
        myUndefined = undefined;

    it('Assert Style', ()=>{
        // assert.ok(false)
        // assert.typeOf(arr, 'array');
        // assert.include(arr, 90, "90 isn't there in the array");
        // assert.lengthOf(arr, 3, "length isn't 4");
        // assert.deepEqual(arr [30, 40, 50])
        // assert.equal(arr, [30, 40, 50])
        // assert.sameOrderedMembers(arr, [30, 40, 50])
    });
    it('Expect Style',() => {
        // expect(true).to.be.false
        // expect(arr).to.be.a('array')
        // expect(arr).to.have.length(3);
        // expect(arr).to.eql([30,40,50]);
        // expect(obj).to.not.have.keys(["name1","age1"]);
    });

    it.only('Should Style',()=>{
        // true.should.be.false
        arr.should.include(30)
    });
})