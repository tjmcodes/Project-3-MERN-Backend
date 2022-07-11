/* eslint-disable no-undef */
import { expect } from 'chai'
import setup from './lib/setup.js'
import tearDown from './lib/tearDown.js'

// * Mocha ☕️

describe('Testing REGISTER', () => {

  beforeEach(done => {
    setup(done)
  })

  afterEach(done => {
    tearDown(done)
  })

  // Registration and login tests.
  it('Should be able to register a new user', (done) => {

    api.post('/api/register')
      // send this data (post)
      .send({
        "username": "luke",
        "password": "Whisperers7!",
        "passwordConfirmation": "Whisperers7!",
        "email": "whispererLuke@whisperers.com",
        
      })
      .end((err, res) => {
        expect(res.status).to.eq(201)
        expect(res.body.username).to.eq('luke')
        done()
      })
  })

  it('Should fail to register when fields are missing', (done) => {

    api.post('/api/register')
      .send({
        "username": "laleh",
        "password": "Whisperers4!", 
      })

      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })

  it('Should be able to login a new user', (done) => {
    api.post('/api/login')
      
      .send({
        "password": "Whisperers4!",
        "email": "whisperers@whisperers.com",
      })
      
      .end((err, res) => {
        expect(res.status).to.eq(200)
        expect(res.body.token).to.be.a('string')
        done()
      })
  })
})

