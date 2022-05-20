
const EventEmitter = require('events');

const emitter = new EventEmitter();

// ================ПРОСЛУШИВАНИЕ СОБЫТИЙ================
// emitter.on('anything', data => {//прослушка событий
//     console.log('ON: anything', data);
// })

// emitter.emit('anything', { a: 1 })
// emitter.emit('anything', { b: 2 })
// 1.первый параметр событие которое слушаю
// 2. второй параметр данные которые хочу передать

// setTimeout(() => {
//     emitter.emit('anything', { c: 3 })
// }, 500)

class Dispatcher extends EventEmitter { //унаследрвания класса 
    subscribe(eventName, cb) {//второй параметр callback
        console.log('[Subscribe...]');
        this.on(eventName, cb)     //подписаться к событию (callback который будет выполнен)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]');
        this.emit(eventName, data)
    }
}
const dis = new Dispatcher();

dis.subscribe('aa', data => {
    console.log('ON: aa', data);
})

dis.dispatch('aa', { aa: 22 })