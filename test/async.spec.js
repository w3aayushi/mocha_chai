const expect = require('chai').expect
const axios = require('axios')

describe('async test suite', function (){

    this.retries(1)
    let count = 0;

    it('promised based way', function(){
        this.timeout(100)
        console.log('Retry attempt-', count);
        count++ ;
        this.retries(2)
        return axios.get('https://reqres.in/api/users/2').then(res =>{
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
        })
    });

    it('done based way', (done)=>{
        axios.get('https://reqres.in/api/users/2').then(res =>{
            expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
            done()
        }).catch(err =>{
            done(err)
        })
    });

    it('async await based way', async()=>{
        const res = await axios.get('https://reqres.in/api/users/2')
        expect(res.data.data.email).to.be.equal('janet.weaver@reqres.in')
    });
})