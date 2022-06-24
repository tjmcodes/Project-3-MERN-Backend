// ? A file containing our environment variables
import dotenv from 'dotenv'

dotenv.config()

const mongoURL = 'mongodb://127.0.0.1:27017'


export const dbURL = process.env.NODE_ENV === 'test' ?
  `${mongoURL}/soundsdb-test` :
  `${mongoURL}/soundsdb`

export const secret = 'thisformalhighwayremember'


// const environment = process.env.NODE_ENV || 'development'

// `mongodb://127.0.0.1:27017/soundUploaddb-${environment}`
// export const port = 8000


