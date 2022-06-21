// ? A file containing our environment variables

const mongoURL = 'mongodb://127.0.0.1:27017'

export const dbURL = process.env.NODE_ENV === 'test' ?
  `${mongoURL}/soundsdb-test` :
  `${mongoURL}/soundsdb`

export const secret = 'thisformalhighwayremember'