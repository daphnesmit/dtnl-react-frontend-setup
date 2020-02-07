# ValueId

When WS Library expects integers, booleans etc. from input, a Value ID can be used to transform the values into strings, booleans or others.

'valueIdentifier:id/value'

`int:cores/4`

When passed into `getTransformedValue()` it will return `4` as a integer.

`all:cores` will be transformed into a string with `all`
`bool:cores/true` => `true` as boolean
`int:cores/4` => `4` as integer
`str:cores/4+` => `4+` as a string

### Adding
In value-id-transform-functions value id's can be defined and the corresponding transform functions
