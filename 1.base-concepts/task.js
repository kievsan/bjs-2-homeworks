"use strict";

// (BJS-45) 1.1 Основные понятия

function solveEquation(a, b, c) {
    let arr;
    // код для задачи №1 писать здесь
    arr = [];
    let d = b * b - 4 * a * c;
    if (a !== 0 && d >= 0) {
        arr.push((-b + Math.sqrt(d)) / (2 * a));
        if (d > 0) {
            arr.push((-b - Math.sqrt(d)) / (2 * a))
        }
    }
    return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    // код для задачи №2 писать здесь
    let credit = {
        percent: {name: 'Процентная ставка', value: percent, rightType: 'number'},
        contribution: {name: 'Начальный взнос', value: contribution, rightType: 'number'},
        amount: {name: 'Общая стоимость', value: amount, rightType: 'number'},
        date: {name: 'Расчетнаяя дата', value: date, rightType: 'date'}
    };
    for (let parameter in credit) {
        let param = credit[parameter];
        switch (param.rightType) {
            case 'number':
                let parser = parseFloat(param.value);
                if (isNaN(parser)) {
                    return writeMsgErrNumberValue(param);
                }
                credit[parameter].value = parser;
                break;
            case 'date':
                if (param.value.toString() === 'Invalid Date') {
                    return writeMsgErrNumberValue(param);
                }
                break;
            default:
                return writeMsgErrNumberValue(param);
        }
    }
    if (credit.percent.value === 0) {
        return writeMsgErrNumberValue(credit.percent);
    }
    if (credit.contribution.value > credit.amount.value) {
        return writeMsgErrNumberValue(credit.contribution);
    }
    if (credit.amount.value === 0) {
        return writeMsgErrNumberValue(credit.amount);
    }
    if (credit.date.value - (new Date()) <= 0) {
        return writeMsgErrNumberValue(credit.date);
    }

    credit.creditBody = credit.amount.value - credit.contribution.value;
    credit.begin = new Date();
    credit.end = credit.date.value;
    credit.days =  ((credit.end - credit.begin) / (1000 * 60 * 60 * 24)).toFixed(0);
    credit.months = 12 * (credit.end.getFullYear() - credit.begin.getFullYear());
    credit.months += credit.end.getMonth() - credit.begin.getMonth();

    let p = credit.percent.value / 100 / 12; // если 0%, то деление на ноль: monthlyPayment = NaN
    credit.monthlyPayment = credit.creditBody * (p + p / (Math.pow(1 + p, credit.months) - 1));
    credit.fullPayment = Math.round((credit.monthlyPayment * credit.months) * 100)/100;
    credit.monthlyPayment = Math.round(credit.monthlyPayment * 100) / 100;

    totalAmount = writeMsgAboutCredit(credit);
    return totalAmount;


    function writeMsgErrNumberValue(param) {
        let msg = `Параметр "${param.name}" содержит неправильное значение "${param.value}"`;
        alert(msg);
        return msg;
    }


    function writeMsgAboutCredit(credit = credit) {
        let msg = `Кредит в размере ${credit.amount.value} руб. под ${credit.percent.value * 100}%` +
            ` на ${credit.months} месяц. с первоначальным взносом ${credit.contribution.value} руб.` +
            ` c ежемесячными платежами в размере ${credit.monthlyPayment}` +
            ` на общую сумму ${credit.fullPayment}`;
        alert(msg);
        return credit.fullPayment;
    }
}


