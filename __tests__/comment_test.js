/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

// * Mocha ☕️

describe('Testing POST /api/all-sounds/:soundId/comments', () => {

  // * Mocha
  beforeEach(done => {
    // seed database
    setup(done)
  })

  // * Mocha
  // clear data
  afterEach(done => {
    tearDown(done)
  })

  // TESTS:
  it('should return a 200 response status code', (done) => {

    api.get('/api/all-sounds/:soundId/comments')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })
})