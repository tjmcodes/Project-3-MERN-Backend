import Sound from '../../models/soundModel.js'
import User from '../../models/user.js'

// removes the test data from the database once finished.
export default async function tearDown(done) {
  await User.deleteMany()
  await Sound.deleteMany()
  done()
}