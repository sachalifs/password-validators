/**
 * Interface representing a password validator
 * @interface Validator
 */
export interface Validator {
  /**
   * Unique identifier for the validator
   * @type {string}
   */
  id: string

  /**
   * Human-readable title/name of the validator
   * @type {string}
   */
  title: string

  /**
   * Function that validates a password string
   * @param {string} value - The password string to validate
   * @returns {boolean} - Returns true if the password meets the validation criteria, false otherwise
   */
  validate: (value: string) => boolean
}
