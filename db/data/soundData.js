// ? An array of objects, that we can use as our initial data.

// ! do we need to import cloudinary here? To deal with the sizeInBytes etc

export default [
  {
    fileName: 'Bells',
    sizeInBytes: 1, // this information is taken from cloudinary not user
    category: ['music'],
    audioFile: 'https://res.cloudinary.com/tjmcodes/video/upload/v1655481830/sea.wav',
    hashtag: [ 'ambient', 'bells', 'electronica' ],
  }
]