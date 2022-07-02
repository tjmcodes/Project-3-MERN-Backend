// ? A file containing our environment variables
import dotenv from 'dotenv'

dotenv.config()
const mongoURL = 'mongodb://127.0.0.1:27017'

export default function getDbURL() {
  if (process.env.NODE_ENV === 'test') {
    return `${mongoURL}/soundsdb-test` 
  } else if (process.env.DB_URI) {
    return process.env.DB_URI
  } else {
    return `${mongoURL}/soundsdb`
  }
}

export const dbURL = getDbURL()
export const port = process.env.PORT || 4000
export const secret = 'thisformalhighwayremember'

// "mongodb+srv:Lukeobrien02:Startovaya7@myfoundsounds.4wj4az8.mongodb.net/?retryWrites=true&w=majority"

//export const dbURI = process.env.DB_URI || 'mongodb://localhost/soundsdb>'
//export const port = process.env.PORT || 4000
// export const secret = 'thisformalhighwayremember'
// export default dbURL



