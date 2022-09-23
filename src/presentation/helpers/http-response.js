const MissingParamError = require('../errors/missing-param-error')
const UnauthorizedError = require('../errors/unauthorized-error')

module.exports = class HttpResponse {
  static badRequest (missingParam) {
    return {
      statusCode: 400,
      body: new MissingParamError(missingParam)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }
}
