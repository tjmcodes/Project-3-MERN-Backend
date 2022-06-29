export const notFound = 'notFound'
export const validationError = 'ValidationError'
export const castError = 'CastError'

export default function errorHandler(err, req, res, next) {
  console.log('🤖 An Error Happened', err.name, err.message)
  console.log(err)

  if (err.name === validationError) {
    const customErrors = {}

    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }

    return res.status(422).send({
      message: 'Form Validation Errors',
      errors: customErrors,
    })
  }

  if (err.name === castError || err.message === notFound) {
    return res.status(404).send({ message: 'Not Found ' })
  }

  res.sendStatus(500)
  next(err)
}


