import Rest from '@/service/Rest'
// import { prom } from '@/service/helper'

export default class ComicBook extends Rest {
  /**
   * @param {*} options
   */
  constructor(options) {
    super(options, '/comic-book')
  }
}