const EventEmitter = require('events');

/*
const emitter = new EventEmitter();

emitter.on('olala',data=>{
    console.log('ON: olala', data)
})
emitter.emit('olala',{a:1})
emitter.emit('olala',{b:2})

setTimeout(()=>{
    emitter.emit('olala',{c:3})
},1500)
*/

class Dispatcher extends EventEmitter{
    subscribe(eventName,cb){
        console.log('[Subscribe..]')
        this.on(eventName,cb)
    }
    dispath(eventName,data){
        console.log('[Dispatching...]')
        this.emit(eventName,data)
    }
}

const dis = new Dispatcher();

dis.subscribe('aa',data=>{
    console.log('ON:aa', data)
})
dis.dispath('aa',{aa:22})
