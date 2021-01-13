/**
 * Represents an error
 */
export class ClientError extends Error {
    status: number
    message: string
    /**
     * @param {string} message status error message.
     * @param {number} status status error code.
     */
    constructor(message = "", status = 400) {
      super()
      this.message = message
      this.status = status
    }
}
