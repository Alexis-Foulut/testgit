
document.getElementById('plus').addEventListener('click',add);

function add(){
    let op1 = document.getElementById('op1');
    let op2 = document.getElementById('op2');

    document.getElementById('resultat').innerText = parseInt(document.getElementById('op1').value) + parseInt(document.getElementById('op2').value);
}

document.getElementById('moins').addEventListener('click',add);

function add(){
    let op1 = document.getElementById('op1');
    let op2 = document.getElementById('op2');

    document.getElementById('resultat').innerText = parseInt(document.getElementById('op1').value) - parseInt(document.getElementById('op2').value);
}

document.getElementById('fois').addEventListener('click',add);

function add(){
    let op1 = document.getElementById('op1');
    let op2 = document.getElementById('op2');

    document.getElementById('resultat').innerText = parseInt(document.getElementById('op1').value) * parseInt(document.getElementById('op2').value);
}

document.getElementById('divi').addEventListener('click',add);

function add(){
    let op1 = document.getElementById('op1');
    let op2 = document.getElementById('op2');

    document.getElementById('resultat').innerText = parseInt(document.getElementById('op1').value) / parseInt(document.getElementById('op2').value);
}