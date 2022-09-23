module.exports = class UnauthorizedError extends Error {
  constructor () {
    super('An internal error occurred')
    this.name = 'UnauthorizedError'
  }
}
