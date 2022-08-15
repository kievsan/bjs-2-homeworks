// Домашнее задание к лекции 7 «Асинхронность»
// Задача №1. Будильник-колыбельная


class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock (timeStart, funcHasToDo, idCall) {
        if (!idCall) {
            throw new Error('параметр "id" не передан');
        }
        if (this.hasIdCall(idCall)) {
            console.error(`Уже есть будильник-${idCall}.` +
                ` Запись не сохранена!`);
            return false;
        }
        if (!funcHasToDo) {
            funcHasToDo = () =>  setInterval(console.log, 3000, 'Будильник: сообщение-' + idCall);
        }
        if (!timeStart) {
            timeStart = this.getCurrentFormattedTime();
        }

        this.alarmCollection.push({id: idCall, time: timeStart, callback: funcHasToDo});
        console.log(`Добавлен будильник-${idCall} на ${timeStart}  (.addClock)`);
        return true;
    }

    removeClock (idCall) {
        this.alarmCollection = this.alarmCollection.filter((timer) => timer.id !== idCall);
        if (!this.hasIdCall(idCall)) {
            console.log(`Удален будильник-${idCall}  (.removeClock)`);
            this.printAlarms();
        }
        return this.hasIdCall(idCall);
    }

    start () {
        let checkClock = (timer) => {
            if (timer.time === this.getCurrentFormattedTime()) {
                console.log(`${timer.id}) ${timer.time} - активный будильник-${timer.id}  (.checkClock)`);
                console.log(`ждём СООБЩЕНИЕ-${timer.id}!`);
                timer.callback();
            }
        }
        console.log(`запускаем все звонки!  (.start)`);
        if (!this.timerId) {
            this.timerId = setInterval((timers) =>
                    timers.forEach((timer) => checkClock(timer)),6000,  this.alarmCollection);
        }
    }

    stop () {
        console.log('останавливаем все звонки!  (.stop: ', this.timerId, ')');
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms () {
        console.log(`Печать списка будильников: ${this.alarmCollection.length}  (.printAlarms)`);
        this.alarmCollection.forEach((timer) => console.log(timer));
    }

    clearAlarms = () => {
        this.stop();
        console.log(`удаляем все звонки!  (.clearAlarms)`);
        this.alarmCollection = [];
    }

    getCurrentFormattedTime = (date = new Date()) =>
        date.toLocaleTimeString('ru', {hour: "2-digit", minute: "2-digit"});

    hasIdCall = (idCall) => this.alarmCollection.some((timer) => timer.id === idCall);
}


// 2. Напишите пример использования класса AlarmClock (реализуйте и запустите функцию testCase):

function  testCase (myAlarmClock) {
    myAlarmClock.addClock(null, () =>  {
        let idInterval = setInterval(console.log, 1000, 'Будильник: СООБЩЕНИЕ-1');
        setTimeout(clearInterval, 3003, idInterval);
        }, 1);
    myAlarmClock.addClock(myAlarmClock.getCurrentFormattedTime(new Date(Date.now() + 60000)),
        () =>  {
        let idInterval = setInterval(console.log, 0, 'Будильник: СООБЩЕНИЕ-2');
        clearInterval(idInterval);
        myAlarmClock.removeClock(2);
        }, 2);
    myAlarmClock.addClock(myAlarmClock.getCurrentFormattedTime(new Date(Date.now() + 120000)),
        () =>  {
        let idInterval = setInterval(console.log, 0, 'Будильник: СООБЩЕНИЕ-3');
        clearInterval(idInterval);
        myAlarmClock.clearAlarms();
        myAlarmClock.printAlarms();
        }, 3);
    myAlarmClock.addClock(null, null, 1);
    myAlarmClock.printAlarms();
    myAlarmClock.start();
    // myAlarmClock.printAlarms();
}

testCase(new AlarmClock());

