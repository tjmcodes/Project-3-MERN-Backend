/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

// * Mocha ☕️
// ? This is a testing suite. It ties everything together.
// ? 'describe' is a mocha keyword, to create suites of tests.
describe('Testing REGISTER', () => {

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

  // ! Registration and login tests.
  it('Should be able to register a new user', (done) => {

    api.post('/api/register')
      // ! Here's you POST data..
      .send({
        "username": "luke",
        "password": "Whisperers7!",
        "passwordConfirmation": "Whisperers7!",
        "email": "whispererLuke@whisperers.com",
        
      })
      // ! End is what happens when the request is finished
      .end((err, res) => {
        expect(res.status).to.eq(201)
        expect(res.body.username).to.eq('luke')
        done()
      })
  })

  it('Should fail to register when fields are missing', (done) => {

    api.post('/api/register')
      // ! Here's you POST data..
      .send({
        "username": "laleh",
        "password": "Whisperers4!", 
      })
      // ! End is what happens when the request is finished
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('Should be able to login a new user', (done) => {
    api.post('/api/login')
      // ! Here's you POST data..
      .send({
        "password": "Whisperers4!",
        "email": "whisperers@whisperers.com",
      })
      // ! End is what happens when the request is finished
      .end((err, res) => {
        expect(res.status).to.eq(200)
        expect(res.body.token).to.be.a('string')
        done()
      })
  })
})

