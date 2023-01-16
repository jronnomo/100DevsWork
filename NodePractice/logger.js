const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
    log(yo){
        //Call event
        //the 'yo' could be anything. just providing 1 word here is basically word:word, so if it matches parameter name in log(param), then it's going to output with passed argument
        // Called Listener { id: 'b48dd068-a189-431d-b837-57e7c4c648a8', yo: 'Hello World' }
        this.emit('message', { id: uuid.v4(), yo})
    }
}

module.exports = Logger