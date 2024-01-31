let open = false;
let start = false;
const overlay = document.querySelector('.overlay');
const btn1 = document.querySelector('.invbtn1');
const btn2 = document.querySelector('.invbtn2');
const btn3 = document.querySelector('.invbtn3');
const btn4 = document.querySelector('.invbtn4');
const btn5 = document.querySelector('.invbtn5');
const false1 = document.querySelector('.btn1');
const false2 = document.querySelector('.btn2');
const false3 = document.querySelector('.btn3');
const false4 = document.querySelector('.btn4');
const false5 = document.querySelector('.btn5');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const info = document.querySelector('.info');
const code = 'etlalumierefut';

// Utilisez un objet pour stocker les états des drapeaux
const flags = {
    flag1: false,
    flag2: false,
    flag3: false,
    flag4: false,
    flag5: false
};

var minutes = 15;
var secondes = 0;
var timer = document.getElementById('timer');
var interval;

function startTimer() {
    startButton.style.display = 'none';
    start = true;
    interval = setInterval(function () {
        if (secondes == 0) {
            minutes--;
            secondes = 59;
        } else {
            secondes--;
        }
        if (secondes < 10) {
            timer.innerHTML = minutes + ':0' + secondes;
        } else {
            timer.innerHTML = minutes + ':' + secondes;
        }
        if (minutes == 0 && secondes == 0) {
            clearInterval(interval);
            timer.innerHTML = 'Temps écoulé !';
        }
    }, 1000);
}

// Call startTimer() when the start button is clicked
const startButton = document.querySelector('.start');
startButton.addEventListener('click', startTimer);

function win() {
    if (flags.flag1 && flags.flag2 && flags.flag3 && flags.flag4 && flags.flag5) {
        const final = document.querySelector('.final');
        const finalinput = document.querySelector('.finalinput');
        const finalbtn = document.querySelector('.finalbtn');
        final.style.display = 'block';
        finalbtn.addEventListener('click', function () {
            if (finalinput.value == code) {
                //je veux faire une transition pour que l'overlay disparaisse lenntement
                overlay.style.transition = 'all 4s';
                overlay.style.opacity = '0';
                final.style.fontSize = '50px';
                final.innerHTML = 'Bravo ! <br> Vous avez réussi ! <br> La salle s\'est allumée !';
            }
        });
    }
}

function closeInfo() {
    info.style.display = 'none';
    open = false;
}

document.addEventListener('mousemove', function (e) {
    if (!open && start) {
        //je veux faire disparaitre le curseur
        overlay.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 50px, #000 100px)`;
    }
});

let currentSubmitListener = null;

function openInfo(message, numToUpdate, btn, falseBtn, numpart, flag) {
    open = true;
    info.style.display = 'block';
    info.style.cursor = 'default';
    const indice = document.querySelector('.ind');
    indice.innerHTML = message;
    const exit = document.querySelector('.exit');
    const input = document.querySelector('.ipt');
    const submit = document.querySelector('.valid');

    if (currentSubmitListener) {
        submit.removeEventListener('click', currentSubmitListener);
    }

    currentSubmitListener = function () {
        if (input.value.trim() === numpart) {
            numToUpdate.innerHTML = numpart;
            btn.style.display = 'none';
            falseBtn.style.display = 'none';
            flags[flag] = true;
            win();
            indice.innerHTML = '';
            closeInfo();
        } else {
            openInfo('Mauvaise réponse !<br>', numToUpdate, btn, falseBtn, numpart, flag);
        }
    };

    submit.addEventListener('click', currentSubmitListener);

    exit.addEventListener('click', function (event) {
        indice.innerHTML = '';
        closeInfo();
    });
}

btn1.addEventListener('click', function () {
    openInfo('Munissez-vous de votre boussole !<br>', num5, btn1, false1, '13', 'flag1');
});

btn2.addEventListener('click', function () {
    openInfo('Regarder derrière le tableau !<br>', num4, btn2, false2, '67', 'flag2');
});

btn3.addEventListener('click', function () {
    openInfo('Vous ne trouvez pas qu\'il fait chaud ?<br>', num1, btn3, false3, '06', 'flag3');
});

btn4.addEventListener('click', function () {
    openInfo('Trouvez le bon ordi dans le bon sac !<br>', num2, btn4, false4, '34', 'flag4');
});

btn5.addEventListener('click', function () {
    openInfo('Regardez bien toute la table !<br>', num3, btn5, false5, '78', 'flag5');
});
