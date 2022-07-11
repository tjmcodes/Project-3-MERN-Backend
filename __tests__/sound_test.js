/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

// * Mocha ☕️
//  'describe' is a mocha keyword, to create suites of tests.
describe('Testing GET /api/all-sounds', () => {

  // * Mocha
  // run code to setup our environment.
  beforeEach(done => {
    // ? Seed the database with some test data.
    setup(done)
  })

  // * Mocha
  // after each test, this code runs to clear data
  afterEach(done => {
    tearDown(done)
  })

  // TESTS:
  it('should return a 200 response status code', (done) => {
    // api: supertest
    api.get('/api/all-sounds')
      .end((err, res) => {
        // Chai: make an assertion
        expect(res.status).to.eq(200)
        // Call done() when the test is finished. 
        done()
      })
  })

  it('should return an array of 3 sounds', (done) => {
    api.get('/api/all-sounds')
      .end((err, res) => {
        expect(res.body).to.be.an("array")
        expect(res.body.length).to.eq(3)
        done()
      })    
  })

})

describe('Testing GET /api/all-sounds/:soundId', () => {

  beforeEach(done => {
    setup(done)
  })
  afterEach(done => {
    tearDown(done)
  })

  it('should return a sound object', (done) => {
    
    api.get('/api/all-sounds')
      .end((err, res) => {
        expect(res.body).to.be.an("array")
        const soundId = res.body._id


        api.get(`/api/all-sounds/${soundId}`)
          .end((err, res) => {
            
            // Check if  object.
            expect(res.body).to.be.an('object')
            done()
          })
      })
  })

})