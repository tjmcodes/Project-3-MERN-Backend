// ! This helper file is always run FIRST, before any tests.
// ! It gets run when we do `npm run test`
process.env.NODE_ENV = 'test'

// ! In this file I do setup for all of my tests, defining globals and
// ! so on.

// * CHAI 🍵
// ? Chai is an assertion library
// ? Assertions evaluate to true or false.
// ? Does my sound.name equal what I think it should?
// Kinda like: expect(pokemon.fileName).to.be.a('string')
// expect(sound.fileName    )).to.equal('charmander')
import chai from 'chai'
// ! global in node creates global variables.
global.expect = chai.expect

// * Supertest 🦹‍♀️
// ? Supertest is a 'wrapper', a function for testing APIs
// ? With Supertest I can make requests programmatically
// ? to test my API
import supertest from 'supertest'
// ! Supertest will 'wrap' my express API with new methods
// ! for testing.
import expressApp from '../server.js'
// ! To setup supertest we do:
global.api = supertest(expressApp)

// * We now should have a suitable environment for testing.
// * And we have setup everything we need.