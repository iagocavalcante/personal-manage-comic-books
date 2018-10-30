import Service from './Service'
import { axios } from './helper'

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
    return axios({ status: 'READ_ALL' })
  }
  
  /**
   * @param {Object} record
   */
  create(record) {
    return axios({ status: 'CREATE' })
  }

  /**
   * @param {string} id
   */
  read(id) {
    return axios([{ status: 'READ' }])
  }

  /**
   * @param {Object} record
   */
  update(record) {
    return axios({ status: 'UPDATE' })
  }

  /**
   * @param {Object} record
   */
  destroy(record) {
    return axios({ status: 'DESTROY' })
  }
}