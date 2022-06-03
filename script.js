function init() {
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
const acBtn = document.createElement('button');
const pmBtn = document.createElement('button');
const divBtn = document.createElement('button');
const multBtn = document.createElement('button');
acBtn.classList.add('modifier');
acBtn.id = 'clear';
acBtn.innerHTML = 'AC';
rows[0].appendChild(acBtn);
pmBtn.classList.add('modifier');
pmBtn.id = 'pm';
pmBtn.innerHTML = '±';
rows[0].appendChild(pmBtn);
divBtn.classList.add('operator');
divBtn.id = 'divide';
divBtn.innerHTML = '÷';
rows[0].appendChild(divBtn);
multBtn.classList.add('operator');
multBtn.id = 'multilply';
multBtn.innerHTML = '×';
rows[0].appendChild(multBtn);

// row 2 7 8 9 -
const btn7 = document.createElement('button');
const btn8 = document.createElement('button');
const btn9 = document.createElement('button');
const minBtn = document.createElement('button');
btn7.classList.add('num');
btn7.id = 'seven';
btn7.innerHTML = '7';
rows[1].appendChild(btn7);
btn8.classList.add('num');
btn8.id = 'eight';
btn8.innerHTML = '8';
rows[1].appendChild(btn8);
btn9.classList.add('num');
btn9.id = 'nine';
btn9.innerHTML = '9';
rows[1].appendChild(btn9);
minBtn.classList.add('operator');
minBtn.id = 'minus';
minBtn.innerHTML = '-';
rows[1].appendChild(minBtn);

// row 3 4 5 6 +
const btn4 = document.createElement('button');
const btn5 = document.createElement('button');
const btn6 = document.createElement('button');
const plusBtn = document.createElement('button');
btn4.classList.add('num');
btn4.id = 'four';
btn4.innerHTML = '4';
rows[2].appendChild(btn4);
btn5.classList.add('num');
btn5.id = 'five';
btn5.innerHTML = '5';
rows[2].appendChild(btn5);
btn6.classList.add('num');
btn6.id = 'six';
btn6.innerHTML = '6';
rows[2].appendChild(btn6);
plusBtn.classList.add('operator');
plusBtn.id = 'plus';
plusBtn.innerHTML = '+';
rows[2].appendChild(plusBtn);

// row 4 1 2 3 =
// row 4 0 0 . =
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
btn1.classList.add('num');
btn1.id = 'one';
btn1.innerHTML = '1';
btn2.classList.add('num');
btn2.id = 'two';
btn2.innerHTML = '2';
btn3.classList.add('num');
btn3.id = 'three';
btn3.innerHTML = '3';
const row4top = document.createElement('div');
row4top.classList.add('row4row');
row4top.appendChild(btn1);
row4top.appendChild(btn2);
row4top.appendChild(btn3);

const btn0 = document.createElement('button');
const point = document.createElement('button');
const equal = document.createElement('button');
btn0.classList.add('num');
btn0.id = 'zero';
btn0.innerHTML = '0';
point.classList.add('modifier');
point.id = 'decimal';
point.innerHTML = '.';
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
}
function reset() {
    total = '0';
    display.innerHTML = total;
    mem = 0;
    operator = add;
    overwrite = true;
}
function updateDisplay(d) {
    display = document.querySelector('.display');
    if (d === '0' || d === undefined) {
        display.innerHTML = '0';
    } else {
        display.innerHTML = d;
    }
}
function checkOverflow(a) {
    let str = a;
    if (str.startsWith('-')) {
        str = str.substring(1);
    }
    if (str.length > 12 && (str.indexOf('.') > 12 || str.indexOf('.') === -1)) {
        return 'Overflow';
    }
    if (str.length > 12) {
        return a.substr(0, 13);
    }
    return a;
}

function operate() {
    if (overwrite) return;
    total = String(operator(mem, total));
    mem = total;
    updateDisplay(total);
    overwrite = true;
}

let add = (a, b) => {
    let sum = `${+a + +b}`;
    return checkOverflow(sum);
};
let subtract = (a, b) => {
    let diff = `${+a - +b}`;
    return checkOverflow(diff);
};
let multiply = (a, b) => {
    let prod = `${+a * +b}`;
    return checkOverflow(prod);
};
let divide = (a, b) => {
    let quot = `${+a / +b}`;
    return checkOverflow(quot);
};
let pm = a => -a;

init();
let total = '0';
let display = document.querySelector('.display');
let mem = 0;
let operator = add;
let overwrite = true;

// 7 8 9 4 5 6 1 2 3 0
let nums = Array.from(document.querySelectorAll('.num'));
for (btn of nums) {
    btn.addEventListener('click', (e) => {
        if (overwrite) {
            total = e.target.innerHTML;
            overwrite = false;
        } else if (total.length < 12) {
            total += e.target.innerHTML;
        }
        updateDisplay(total);
    });
}

let acBtn = document.querySelector('#clear');
acBtn.addEventListener('click', () => {
    reset();
});

let decimal = document.querySelector('#decimal');
decimal.addEventListener('click', (e) => {
    if (!total.includes('.') && total.length < 12) {
        total += e.target.innerHTML;
    }
    updateDisplay(total);
});

let pmBtn = document.querySelector('#pm');
pmBtn.addEventListener('click', (e) => {
    if (total === '0') {
        return;
    }
    if (total.charAt(0) === '-') {
        total = total.slice(1);
    } else if (total.length < 13) {
        total = '-' + total;
    }
    updateDisplay(total);
})


let ops = document.querySelectorAll('.operator');
let divOp = ops[0];
let multOp = ops[1];
let minOp = ops[2];
let plOp = ops[3];
divOp.addEventListener('click', (e) => {
    operate();
    operator = divide;
});

multOp.addEventListener('click', (e) => {
    operate();
    operator = multiply;
});

minOp.addEventListener('click', (e) => {
    operate();
    operator = subtract;
});

plOp.addEventListener('click', (e) => {
    operate();
    operator = add;
});

let eqBtn = document.querySelector("#equal");
eqBtn.addEventListener('click', (e) => {
    operate();
});
