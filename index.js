//Задание 1
/*
function countArrayElements(arr) {
    let evenCount = 0;     // Количество чётных чисел
    let oddCount = 0;      // Количество нечётных чисел
    let zeroCount = 0;     // Количество нулей

    for (let element of arr) {
        if (typeof element === "number" && !isNaN(element)) { // Проверяем, является ли элемент числом
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    console.log(`Чётные: ${evenCount}`);
    console.log(`Нечётные: ${oddCount}`);
    console.log(`Нули: ${zeroCount}`);
}

// Пример использования
const sampleArray = [0, 1, 2, 3, 4, 5, 6, null, "hello", undefined, 0];
countArrayElements(sampleArray);
*/

//Задание 2



/*function getAnyNumber(num) {
    let _true = 'число простое', _false = 'ответ неверный';
    if ( num <= 1 && num >1000) return _false;
    if (num == 2) return _true;
    for (let i = 2; i<= num / 2 ; i++) {
        if (num % i == 0 ) {
            return _false;

        }
    }
    return _true;
    }

console.log(getAnyNumber(26));
console.log(getAnyNumber(53));*/

//Задание 3


/*function createAdder(x) {

    return function (y) {
        return x + y;

    }
}

const addNumber =createAdder(3);
console.log (addNumber(10))

*/
//Задание 4
/*function printNumbersInterval(start, end) {
    // Текущее число, которое будет выведено
    let current = start;

    // Устанавливаем интервал, который срабатывает каждую секунду
    const intervalId = setInterval(function() {
        console.log(current); // Выводим текущее число

        // Если текущее число достигло конечного, очищаем интервал
        if (current === end) {
            clearInterval(intervalId);
        }

        // Увеличиваем текущее число
        current++;
    }, 1000); // Интервал в миллисекундах (1000 = 1 секунда)
}

// Пример использования
printNumbersInterval(5, 15);
*/
//Задание 5
const exponentiation = (x,n) => {
    let result = 1;
    for (let i = 0; i<n; i++) {
        result *= x;
    }
    return result;

}
console.log (exponentiation(3,2))
