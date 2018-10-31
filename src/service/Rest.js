import Service from './Service'
import { promise } from './helper'

/**
 * @type {Rest}
 */
export default class Rest extends Service {
  /**
   * @param {Object} options
   * @param {string} resource
   */
  constructor(options, resource) {
    super(options)
    this.resource = resource
  }

  /**
   * @param {Object} record
   */
  getAll() {
    return promise.get('/comic-books')
  }

  /**
   * @param {Object} record
   */
  create(record) {
    return promise({ status: record })
  }

  /**
   * @param {string} id
   */
  read(id) {
    return promise([{ status: id }])
  }

  /**
   * @param {Object} record
   */
  update(record) {
    return promise({ status: record })
  }

  /**
   * @param {Object} record
   */
  destroy(record) {
    return promise({ status: record })
  }
}