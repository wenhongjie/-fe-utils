// import { $, wt, utils } from "../src/index"

// import $, { val, hasClass } from '../src/dom'
import wt, {json, serialize, dataReset, map, values, set} from '../src/data'
// import * as utils from '../src/utils'

// $.use(val, hasClass)
// wt.use(json, serialize, dataReset, map)

const a = wt({a: 1, b: 2, c: 1}).pipe(values, set)
console.log(a)
~function(ctx) {
  // ctx.$ = $
  // ctx.wt = wt 
  // ctx.utils = utils
}(window)
