import Rest from '@/service/Rest'
import { http } from '@/service/helper'

export default class ComicBook extends Rest {
  /**
   * @param {*} options
   */
  constructor(options) {
    super(options, '/api/v1/market/products')
  }

  /**
   * @param {string} id
   */
  getAllVila() {
    return http.get('/vila')
  }

  getAllMedium() {
    return http.get('/medium')
  }
}