/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

// * Mocha ☕️
//  'describe' is a mocha keyword, to create suites of tests.
describe('Testing POST /api/all-sounds/:soundId/comments', () => {

  // * Mocha
  // run code to setup our environment.
  beforeEach(done => {
    // seed the database with some test data.
    setup(done)
  })

  // * Mocha
  // after each test, this code runs to clear data
  afterEach(done => {
    tearDown(done)
  })

  // TESTS:
  it('should return a 200 response status code', (done) => {
    // ! api: supertest
    api.get('/api/all-sounds/:soundId/comments')
      .end((err, res) => {
        // ! Chai: make an assertion
        expect(res.status).to.eq(200)
        // ! Call done() when the test is finished. 
        done()
      })
  })
})