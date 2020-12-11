//task 1

document.write('task 1' + '</br>');

let arr = [1,2,3,4,5];

for (let i = 0; i<arr.length; i++){
    document.write(arr[i]);
}

//task 2

document.write('</br>' + 'task 2' + '</br>');

let arr2 = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];

for (let i = 0; i< arr2.length ; i++){

    if (arr2[i] > -10 && arr2[i] < -3) document.write(arr2[i]);

}

//task 3

document.write('</br>' + 'task 3' + '</br>');


let arr3 = [];

for (let i = 23; i <= 57; i++){
    arr3.push(i);
}
document.write('метод for :' + arr3);

document.write('</br>');

let arr4 = [];
let k = 23;
while (k <= 57) { 
    arr4.push(k);
    k++;
}
document.write('метод while:' + arr4); 

document.write('</br>');
 
let result = 0;

for (let i = 0; i < arr3.length; i++){
    result += arr3[i];
}
document.write('сумма чисел массива:' + result);

//task 4

document.write('</br>' + 'task 4' + '</br>');

let arr5 = ['10', '20', '30', '50', '235', '3000'];
let h = 0;
while(h <= arr5.length) {
    if (h[0] !== '3', typeof arr5[h] !== 'undefined')
    document.write(arr5[h]);
    h++;
}

//task 5

document.write('</br>' + 'task 5' + '</br>');

let arr6 = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
let g=0;
while (g <= arr6.length, typeof arr6[g] == 'undefined') {  
    if (g[0] !== 'C' && g[1] !== 'Б' || g[0] !== 'В' && g[1] !== 'C')    
    g++; 
} document.write ('<b>'+arr6[g]+'</b>');


//task 6

document.write('</br>' + 'task 6' + '</br>');

let arr7 = [1, 2, 'str', false];

arr7.push(234);
document.write(arr7);
document.write('</br>');
document.write(arr7[arr7.length-1]);



//task 7
document.write('</br>' + 'task 7' + '</br>');

let a = +prompt('Введите число, чтобы выйти из ввода введите пустое значение:');
let arr10 = [];
while ( Number.isNaN(NaN), a != '' ) {
    a = +prompt('Введите число, чтобы выйти из ввода введите пустое значение:');
    arr10.push(a);
}alert('Ошибка ввода');

document.write(arr10);
arr10.sort(function(a,b) {
    return a-b;
});
document.write('</br>');
document.write('Сортировка:' + arr10);


//task 8
document.write('</br>' + 'task 8' + '</br>');

let arr8 = [12, false, 'Текст', 4, 2, -5,0];

document.write('прямой порядок:'+arr8);
arr8.reverse();
document.write('</br>');
document.write('обратный порядок метод reverse:'+arr8);
document.write('</br>');

let arr9 = [12, false, 'Текст', 4, 2, -5,0];
let Reverse = arr9.length-1;
document.write('прямой порядок:'+arr9);
document.write('</br>');
while (Reverse >= 0){
    document.write(arr9[Reverse]+ ',');
    Reverse--;    
}

//task 9
document.write('</br>' + 'task 9' + '</br>');

let arr11 = [5, 9, 21,,,9,78,,,,6];
let summ = 0;
let p = arr11.length;
while (p--) {
    if (typeof arr11[p] === 'undefined') 
    summ++;
}
document.write(summ);

//task 10
document.write('</br>' + 'task 10' + '</br>');