module.exports = class MissingParamError extends Error {
  constructor (missingParam) {
    super('Missing parameter:', missingParam)
    this.name = 'MissingParamError'
  }
}
