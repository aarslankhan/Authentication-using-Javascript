const  EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name, id)=> {
    console.log(`data is ready for the ${name} and ${id}`)
})
customEmitter.on('response',()=> {
    console.log('someother logic here')
})

customEmitter.emit('response', 'john', 34)