import Sound from '../../models/soundModel.js'
import User from '../../models/user.js'

// This removes the testdata once you are finished. So when you run the tests, they are the only ones in the db. 
export default async function tearDown(done) {
  await User.deleteMany()
  await Sound.deleteMany()
  done()
}