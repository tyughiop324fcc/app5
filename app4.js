//function Declaration
function greet(name) {
    console.log("Привет, ", name);
}

greet("Вера!");//Работает

//function Expression
const greet2 = function greet2(name2) {
    console.log("Привет, ", name2);
}

greet2("Ира!");//Работает


//greet3("Ира!");
//const greet3 = function greet3(name3) {
//    console.log("Привет, ", name3);
//}//не работает

//Анонимные функции

/*let counter = 0
const interval = setInterval(function() {
    if (counter === 5) {
        clearInterval(interval1)
    } else{
        console.log(++counter);
    }
}, setTimeout = 1000);*/



/*let counter1 = 0
const interval1 = setTimeout(function() {
    if (counter1 === 5) {
        clearTimeout(interval1)
    } else{
        console.log(++counter1);
    }
}, setTimeout = 1000);*/


//Стрелочные функции



const arrow = (name3) => {
    console.log("Привет, ", name3);
}
arrow("Макс");


const arrow2 = name4 => console.log("Привет, ", name4);
arrow2("Коля");


const pov2 = num => {
    return num **2
}
console.log(pov2(5));


const sum = (a, b) => a + b;
console.log(sum(41, 1));

const sum2 = (a = 3, b = a * 2) => a + b;
console.log(sum2());


function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    } 
    return result   
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8,)
console.log(res);


function createMember(name7) {
    return function (lastName) {
        console.log(name7 + lastName);
    }
} 
const logWithLastName = createMember("Feodor");
console.log(logWithLastName(" Letov"));
console.log(logWithLastName(" Viragov"));

