const MissingParamError = require('../errors/missing-param-error')
const LoginRouter = require('./login-router')

const makeSut = () => {
  const sut = new LoginRouter()

  return { sut }
}

describe('Login Router', () => {
  it('should returns 400 if no email is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }

    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  it('should returns 400 if no password is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email'
      }
    }

    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  it('should returns 500 if no httpRequest is provided', () => {
    const { sut } = makeSut()

    const httpResponse = sut.route()

    expect(httpResponse.statusCode).toBe(500)
  })

  it('should returns 500 if httpRequest has no body', () => {
    const { sut } = makeSut()

    const httpResponse = sut.route({})

    expect(httpResponse.statusCode).toBe(500)
  })
})
