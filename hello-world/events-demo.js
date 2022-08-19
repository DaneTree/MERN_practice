const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('Listener', function() {
    console.log('listener has been called'); 
});
emitter.emit('Listener');

emitter.on('HelloWorld', function() {
    console.log('Hello World has been called');
});
emitter.emit('HelloWorld');