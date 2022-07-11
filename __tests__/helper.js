
process.env.NODE_ENV = 'test'

//  CHAI 

import chai from 'chai'
global.expect = chai.expect

// Supertest
import supertest from 'supertest'

import expressApp from '../server.js'

global.api = supertest(expressApp)

