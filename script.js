// populate divs
const calculatorContainer = document.querySelector('.calculator-container')
const rows = [];
for (let i = 0; i < 4; i++) {
    let row = document.createElement('div')
    row.classList.add('row');
    rows.push(row);
    calculatorContainer.appendChild(row);
}

// row 1 AC +/- / *
const acBtn = document.createElement('div');
const pmBtn = document.createElement('div');
const divBtn = document.createElement('div');
const multBtn = document.createElement('div');
acBtn.classList.add('button');
acBtn.classList.add('modifier');
acBtn.id = 'clear';
acBtn.innerHTML = 'AC';
rows[0].appendChild(acBtn);
pmBtn.classList.add('button');
pmBtn.classList.add('modifier');
pmBtn.id = 'pm';
pmBtn.innerHTML = '+/-';
rows[0].appendChild(pmBtn);
divBtn.classList.add('button');
divBtn.classList.add('operator');
divBtn.id = 'divide';
divBtn.innerHTML = '÷';
rows[0].appendChild(divBtn);
multBtn.classList.add('button');
multBtn.classList.add('operator');
multBtn.id = 'multilply';
multBtn.innerHTML = '×';
rows[0].appendChild(multBtn);

// row 2 7 8 9 -
const btn7 = document.createElement('div');
const btn8 = document.createElement('div');
const btn9 = document.createElement('div');
const minBtn = document.createElement('div');
btn7.classList.add('button');
btn7.classList.add('num');
btn7.id = 'seven';
btn7.innerHTML = '7';
rows[1].appendChild(btn7);
btn8.classList.add('button');
btn8.classList.add('num');
btn8.id = 'eight';
btn8.innerHTML = '8';
rows[1].appendChild(btn8);
btn9.classList.add('button');
btn9.classList.add('num');
btn9.id = 'nine';
btn9.innerHTML = '9';
rows[1].appendChild(btn9);
minBtn.classList.add('button');
minBtn.classList.add('operator');
minBtn.id = 'minus';
minBtn.innerHTML = '-';
rows[1].appendChild(minBtn);

// row 3 4 5 6 +
const btn4 = document.createElement('div');
const btn5 = document.createElement('div');
const btn6 = document.createElement('div');
const plusBtn = document.createElement('div');
btn4.classList.add('button');
btn4.classList.add('num');
btn4.id = 'four';
btn4.innerHTML = '4';
rows[2].appendChild(btn4);
btn5.classList.add('button');
btn5.classList.add('num');
btn5.id = 'five';
btn5.innerHTML = '5';
rows[2].appendChild(btn5);
btn6.classList.add('button');
btn6.classList.add('num');
btn6.id = 'six';
btn6.innerHTML = '6';
rows[2].appendChild(btn6);
plusBtn.classList.add('button');
plusBtn.classList.add('operator');
plusBtn.id = 'plus';
plusBtn.innerHTML = '+';
rows[2].appendChild(plusBtn);

// row 4 1 2 3 =
// row 4 0 0 . =
const btn1 = document.createElement('div');
const btn2 = document.createElement('div');
const btn3 = document.createElement('div');
btn1.classList.add('button');
btn1.classList.add('num');
btn1.id = 'one';
btn1.innerHTML = '1';
btn2.classList.add('button');
btn2.classList.add('num');
btn2.id = 'two';
btn2.innerHTML = '2';
btn3.classList.add('button');
btn3.classList.add('num');
btn3.id = 'three';
btn3.innerHTML = '3';
const row4top = document.createElement('div');
row4top.classList.add('row4row');
row4top.appendChild(btn1);
row4top.appendChild(btn2);
row4top.appendChild(btn3);

const btn0 = document.createElement('div');
const point = document.createElement('div');
const equal = document.createElement('div');
btn0.classList.add('button');
btn0.classList.add('num');
btn0.id = 'zero';
btn0.innerHTML = '0';
point.classList.add('button');
point.classList.add('modifier');
point.id = 'decimal';
point.innerHTML = '.';
equal.classList.add('button');
equal.classList.add('modifier');
equal.id = 'equal';
equal.innerHTML = '=';
const row4btm = document.createElement('div');
row4btm.classList.add('row4row');
row4btm.appendChild(btn0);
row4btm.appendChild(point);
const row4left = document.createElement('div');
row4left.classList.add('row4left')
row4left.appendChild(row4top);
row4left.appendChild(row4btm);

rows[3].appendChild(row4left);
rows[3].appendChild(equal);

