const stack = require ('.')
const logger = require('pino')({prettyPrint:{
    levelFirst: true
}})
let s = new stack(5)

s.push(5)
logger.info(s);
s.push(7)
logger.info(s)
const popped = s.pop()
logger.info({popped , lenght : s.size() , } , 'Result after pop opration')
s.showarray()
logger.info(s)