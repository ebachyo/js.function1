function calculateRectangleArea(a, b) {
    if (a <= 0 || b <= 0) {
        return "123";
    }

    return a * b;
}
const sideA = 5;
const sideB = 10;
const area = calculateRectangleArea(sideA, sideB);
console.log(`Площа прямокутника зі сторонами ${sideA} і ${sideB} дорівнює ${area}.`);
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculateCircleArea(r) {
    return Math.PI * r * r;
}
const radius = 5;
const circleArea = calculateCircleArea(radius);
console.log(`Площа кола з радіусом ${radius} дорівнює ${circleArea}.`);
//- створити функцію яка обчислює та повертає площу кола з радіусом r
function calculateCylinderSurfaceArea(r, h) {
    return 2 * Math.PI * r * (r + h);
}
const radius = 3;
const height = 8;
const cylinderSurfaceArea = calculateCylinderSurfaceArea(radius, height);
console.log(`Площа поверхні циліндра з радіусом ${radius} і висотою ${height} дорівнює ${cylinderSurfaceArea}.`);
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function printArrayElements(arr) {
    for (const element of arr) {
        console.log(element);
    }
}
//- створити функцію яка приймає масив та виводить кожен його елемент
function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    document.body.appendChild(paragraph);
}
const myText = "Це текст";
createParagraph(myText);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createListWithItems(text) {
    const ul = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
        const li = document.createElement("li");
        li.innerText = text;
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}
const itemText = "Це текст";
createListWithItems(itemText);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUlWithLi(text, count) {
    if (count <= 0) {
        return null;
    }

    let ulHtml = "<ul>\n";
    const liHtml = `<li>${text}</li>\n`;

    for (let i = 0; i < count; i++) {
        ulHtml += liHtml;
    }

    ulHtml += "</ul>";
    return ulHtml;
}

const text = "Текст елементів LI";
const count = 3;

const ulCode = createUlWithLi(text, count);
console.log(ulCode);
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListFromArray(items) {
    if (!Array.isArray(items)) {
        return null;
    }

    let ulHtml = "<ul>\n";

    for (let i = 0; i < items.length; i++) {
        ulHtml += `<li>${items[i]}</li>\n`;
    }

    ulHtml += "</ul>";
    return ulHtml;
}

const array = [1, "Text", true, "Another text", false, 42];
const listCode = createListFromArray(array);
console.log(listCode);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function displayObjectsAsBlocks(objectsArray) {
    if (!Array.isArray(objectsArray)) {
        return;
    }

    const container = document.createElement("div");
    container.classList.add("object-container");

    objectsArray.forEach(object => {
        const objectBlock = document.createElement("div");
        objectBlock.classList.add("object-block");

        const idElement = document.createElement("p");
        idElement.textContent = `ID: ${object.id}`;

        const nameElement = document.createElement("p");
        nameElement.textContent = `Name: ${object.name}`;

        const ageElement = document.createElement("p");
        ageElement.textContent = `Age: ${object.age}`;

        objectBlock.appendChild(idElement);
        objectBlock.appendChild(nameElement);
        objectBlock.appendChild(ageElement);

        container.appendChild(objectBlock);
    });

    document.body.appendChild(container);
}

const objects = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Carol", age: 28 }
];

displayObjectsAsBlocks(objects);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function findMinimumNumber(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }

    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

const numbers = [5, 2, 8, 1, 9, 3];
const minimum = findMinimumNumber(numbers);
console.log("Найменше число:", minimum);
//- створити функцію яка повертає найменьше число з масиву
function sum(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

const numbers = [1, 2, 10];
const result = sum(numbers);
console.log("Сума:", result);
// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function swap(arr, index1, index2) {
    if (!Array.isArray(arr) || index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        return arr;
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

const array = [11, 22, 33, 44];
swap(array, 0, 1);
console.log(array);

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const currency = currencyValues.find(item => item.currency === exchangeCurrency);

    if (!currency) {
        return "Сумма в начале";
    }

    const exchangeValue = currency.value;
    const exchangedSum = sumUAH / exchangeValue;
    return exchangedSum;
}

const sumUAH = parseFloat(prompt("СУМ В ГРН"));
const currencyValues = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
const exchangeCurrency = prompt("бабки еуро и долара");

const result = exchange(sumUAH, currencyValues, exchangeCurrency);
if (typeof result === "string") {
    console.log(result);
} else {
    console.log("сумма финал:", result.toFixed(2));
}
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250





}