const MissingParamError = require('../errors/missing-param-error')

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
}
