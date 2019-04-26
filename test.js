const assert = require('assert')
//const expect = require('chai')
//const operations = require('./operations.js')
const intAdd = require('./string-calculator')

//make sure mocha is working - should pass
it('Control test - should return true', () => {
  assert.equal(true, true)
})

it('if comma separated string returns the correct sum', () =>{
  assert.equal(intAdd("1,2,3"),6)
})

it('if sum is correct with custom delimiter ( ^ )', ()=>{
  assert.equal(intAdd("//^\n3^4^5"), 12)
})

it('entering a negative number returns error string with list of offending numbers',()=>{
  assert.equal(intAdd("4,-5,6"), "Negatives not allowed: -5")
})

it('Numbers over 1000 are ignored', ()=>{
  assert.equal(intAdd("3,4,1002"), 7)
})

it('longer delimiters with repeated characters ( ^^^ )', ()=>{
  assert.equal(intAdd("//^^^\n5^^^6^^^7"), 18)
})