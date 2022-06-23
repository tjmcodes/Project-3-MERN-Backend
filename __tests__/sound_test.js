/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

// * Mocha ☕️
// ? This is a testing suite. It ties everything together.
// ? 'describe' is a mocha keyword, to create suites of tests.
describe('Testing GET /api/all-sounds', () => {

  // * Mocha
  // ? before each test we want to run some code to setup our environment.
  beforeEach(done => {
    // ? Seed the database with some test data.
    setup(done)
  })

  // * Mocha
  // ? after each test, we need to clear out our database, OR ELSE
  // ? we will have an inconsistent testing environment
  afterEach(done => {
    tearDown(done)
  })

  // ! FINALLY WE WILL WRITE TESTS:
  it('should return a 200 response status code', (done) => {
    // ! api: supertest
    api.get('/api/all-sounds')
      .end((err, res) => {
        // ! Chai: make an assertion
        expect(res.status).to.eq(200)
        // ! Call done() when the test is finished. 
        done()
      })
  })

  it('should return an array of 3 sounds', (done) => {
    // ! api: supertest
    api.get('/api/all-sounds')
      .end((err, res) => {
        expect(res.body).to.be.an("array")
        expect(res.body.length).to.eq(3)
        done()
      })    
  })

})

describe('Testing GET /api/sounds/:soundId', () => {

  beforeEach(done => {
    setup(done)
  })
  afterEach(done => {
    tearDown(done)
  })

  it('should return a sound object', (done) => {
    
    // ! Getting all the sound, just so we can an ID for one.
    api.get('/api/all-sounds')
      .end((err, res) => {
        expect(res.body).to.be.an("array")
        const soundId = res.body[0]._id

        // ! Getting a sound using that ID.
        api.get(`/api/all-sounds/${soundId}`)
          .end((err, res) => {
            // ! Check if its an object.
            expect(res.body).to.be.an('object')
            done()
          })
      })
  })

})