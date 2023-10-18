//1
const ans1 = document.querySelector('#ans1');
const b1 = document.querySelector('#b1');

let list = [{ name: 'Молоко', count: 1, purchased: false}, { name: 'Шоколад', count: 3, purchased: false }, { name: 'Хлеб', count: 2, purchased: false }];
print1();

function print1() {
    ans1.innerHTML = 'Список покупок:';
    list.forEach((item) => {
        ans1.innerHTML += '<br>' + item.name + ' | Кол-во: ' + item.count + ' | Куплен: ' + (item.purchased ? 'Да' : 'Нет');
    });
}

function buy(name) {
    let check = false;
    list.forEach((item) => {
        if (item.name.toLowerCase()  === name.toLowerCase() && !item.purchased) {
            item.purchased = true;
            check = true;
        }
    });
    return check;
}

b1.onclick = () => {
    let name = prompt('Введите товар, который хотите купить:');
    if (name !== null) {
        if (buy(name)) {
            print1();
        }
        else {
            alert('Товар не был куплен, т.к. не находится в списке покупок или уже был куплен ранее.');
        }
    }
}

//2
const ans2 = document.querySelector('#ans2');

let receipt = [{ name: 'Молоко', count: 1, price: 60 }, { name: 'Шоколад', count: 3, price: 25 }, { name: 'Хлеб', count: 2, price: 35 }];

function print2() {
    ans2.innerHTML = 'Чек:<br>';
    receipt.forEach((item) => {
        ans2.innerHTML += item.name + ' | Цена за шт.: ' + item.price + ' | Кол-во:' + item.count + ' | Стоимость: ' + item.count*item.price + '<br>';
    });
}

function sum() {
    let sum = 0;
    receipt.forEach((item) => {
        sum += item.count * item.price;
    });
    ans2.innerHTML = 'Общая сумма: ' + sum;
}

function findMax() {
    let max = 0;
    for (let i = 1; i < receipt.length; i++) {
        if (receipt[i].price > receipt[max].price) {
            max = i;
        }
    }
    ans2.innerHTML = 'Самая дорогая покупка: <br>' + receipt[max].name + ' за ' + receipt[max].price;
}

function avgPrice() {
    let sum = 0;
    receipt.forEach((item) => {
        sum += item.price;
    });
    ans2.innerHTML = 'Средняя стоимость товара в чеке: <br>' + sum/receipt.length;
}

//3
const ans3 = document.querySelector('#ans3');
const b3_1 = document.querySelector('#b3_1');
const b3_2 = document.querySelector('#b3_2');

let aud = [{ name: 501, seats: 10, faculty: 'Кибернетики' }, { name: 502, seats: 20, faculty: 'Механики и Математики' }, { name: 503, seats: 14, faculty: 'Вычислительной Техники' }];

function print3() {
    ans3.innerHTML = 'Список всех аудиторий:';
    aud.forEach((item) => {
        ans3.innerHTML += '<br>' + item.name + ' | Мест: ' + item.seats + ' | Факультет ' + item.faculty;
    });
}

function printForFac(name) {
    let check = false;
    ans3.innerHTML = 'Список аудиторий для фалькутета ' + name;
    aud.forEach((item) => {
        if (item.faculty.toLowerCase() === name.toLowerCase()) {
            ans3.innerHTML += '<br>' + item.name + ' | Мест: ' + item.seats;
            check = true;
        }
    })
    if (!check) {
        ans3.innerHTML += '<br>Не найдено'
    }
}

function printForGroup(group) {
    let check = false;
    ans3.innerHTML = 'Список аудиторий для группы ' + group.name + ':';
    aud.forEach((item) => {
        if (item.seats >= group.students && item.faculty.toLowerCase() === group.faculty.toLowerCase()) {
            ans3.innerHTML += '<br>' + item.name + ' | Мест: ' + item.seats + ' | Факультет ' + item.faculty;;
            check = true;
        }
    })
}

b3_1.onclick = () => {
    let faculty = prompt('Введите необходимый фалькутет:');
    if (faculty !== null) {
        printForFac(faculty);
    }
}

b3_2.onclick = () => {
    const group = {
        name: '',
        students: 0,
        faculty: '',
    }
    group.name = prompt('Введите название группы:');
    group.students = prompt('Введите количество студентов в группе:');
    group.faculty = prompt('Введите название факультета:');
    if (group.name !== null && group.students !== null && group.faculty !== null) {
        printForGroup(group);
    }
}