import {Observable, constant as C} from 'kefir'

import * as R from '../dist/kefir.ramda.cjs'

function show(x) {
  switch (typeof x) {
    case 'string':
    case 'object':
      return JSON.stringify(x)
    default:
      return `${x}`
  }
}

const toExpr = f =>
  f
    .toString()
    .replace(/\s+/g, ' ')
    .replace(/^\s*function\s*\(\s*\)\s*{\s*(return\s*)?/, '')
    .replace(/\s*;?\s*}\s*$/, '')
    .replace(/function\s*(\([a-zA-Z]*\))\s*/g, '$1 => ')
    .replace(/{\s*return\s*([^{;]+)\s*;\s*}/g, '$1')
    .replace(/{\s*return\s*([^{;]+)\s*;\s*}/g, '$1')
    .replace(/\(0, _kefir.constant\)/g, 'C')

const testEq = (expect, thunk) =>
  it(`${toExpr(thunk)} => ${show(expect)}`, done => {
    const actual = thunk()
    function check(actual) {
      if (!R.equals(actual, expect))
        throw new Error(`Expected: ${show(expect)}, actual: ${show(actual)}`)
      done()
    }
    if (actual instanceof Observable) {
      actual.take(1).onValue(check)
    } else {
      check(actual)
    }
  })

describe('Lifted Ramda', () => {
  testEq(3, () => R.add(1)(C(2)))
  testEq(3, () => R.add(C(1), C(2)))

  testEq(-1, () => R.pipe(x => x - 1, x => -x)(C(2)))
  testEq(-1, () => R.apply(R.pipe(R.add(R.__, C(-1)), x => -x), [C(2)]))

  testEq([1, 1], () => R.filter(R.gt(C(2)), C([3, 1, 4, 1])))
  testEq([3, 4], () => R.filter(R.gt(R.__, C(2)), C([3, 1, 4, 1])))

  testEq(true, () => R.propEq(C('x'), 10, {x: 10}))

  testEq([1, 3, 5], () =>
    R.transduce(
      R.compose(
        R.filter(R.pipe(R.modulo(R.__, C(2)), R.equals(C(1)))),
        R.take(C(3))
      ),
      R.flip(R.append),
      C([]),
      R.range(0, C(100))
    )
  )
})
