const fs = require('fs')

const R = require('ramda')

fs.writeFileSync(
  'src/kefir.ramda.js',
  `// THIS FILE IS GENERATED

import * as R from 'ramda'
import {liftRec} from 'kefir.combines'

${Object.keys(R)
    .sort()
    .map(name => `export const ${name} = liftRec(R.${name})`)
    .join('\n')}
`
)
