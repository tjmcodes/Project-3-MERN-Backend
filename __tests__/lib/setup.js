import Sound from '../../models/soundModel.js'
import User from '../../models/user.js'

// ! This is for seeding your test database with data!!!
export default async function setup(done) {
  try {
    const users = await User.create([
      {
        "username": "laleh",
        "password": "Whisperers4!",
        "email": "whisperers@whisperers.com",
        "image": "https://res.cloudinary.com/dy4gabnho/image/upload/v1655660650/pets/my_favorite/axjizpfu7eqzg0uqcigf.jpg",  
      },
      {
        "username": "teresa",
        "password": "Whisperers5!",
        "email": "whisperers25@whisperers.com",
        "image": "https://res.cloudinary.com/tjmcodes/image/upload/v1655473142/AllyCat.jpg",  
      }
    ])
    await Sound.create([
      {
        fileName: 'Bells',
        sizeInBytes: 1, // this information is taken from cloudinary not user
        category: ['music'],
        audioFile: 'https://res.cloudinary.com/tjmcodes/video/upload/v1655481830/sea.wav',
        hashtag: [ 'background', 'nature', 'electronica' ],
        user: users[0]._id,
      },
      {
        fileName: 'Loop',
        sizeInBytes: 1, // this information is taken from cloudinary not user
        category: ['music'],
        audioFile: 'https://res.cloudinary.com/tjmcodes/video/upload/v1655804212/auszkjkspbjhaixxiibf.mp3',
        hashtag: [ 'ambient', 'bells', 'electronica' ],
        user: users[0]._id,
      },
      {
        fileName: 'Ringtone',
        sizeInBytes: 1, // this information is taken from cloudinary not user
        category: ['music'],
        audioFile: 'https://res.cloudinary.com/tjmcodes/video/upload/v1655788585/ry8zwqus5brfhxfdo5eh.mp3',
        hashtag: [ 'ambient', 'bells', 'lofi' ],
        user: users[0]._id,
      }
    ])
  } catch (err) {
    console.log(err)
  }
  done()
}
