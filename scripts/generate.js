const fs = require('fs')

const R = require('ramda')

fs.writeFileSync(
  'src/kefir.ramda.js',
  `// THIS FILE IS GENERATED

import * as R from 'ramda'
import * as K from 'karet.lift'

${Object.keys(R)
    .sort()
    .map(name => `export const ${name} = K.liftRec(R.${name})`)
    .join('\n')}
`
)
