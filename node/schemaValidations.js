
const { validator } = require('@exodus/schemasafe')
const { parser } = require('.')

function getSignUpJsonSchema() {

    const parse = parser({
        $schema: 'https://json-schema.org/draft/2019-09/schema',
        type: 'object',
        required: ['email', 'password'],
        properties: {
            email: {
                pattern: '^[a-z]+$',
                type: 'string'
            },
            password: {
                pattern: '^[a-z1-0A-Z]+$',
                type: 'string'
            }
        },
        additionalProperties: false
    })

    console.log(`validation result :  ${parse(payloadJson)}`)

}

module.exports = { getSignUpJsonSchema }