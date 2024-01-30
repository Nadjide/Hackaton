let open = false;
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
const code = 'uncode';
let enigme1 = false;
let enigme2 = false;
let enigme3 = false;
let enigme4 = false;
let enigme5 = false;
var cpt = 0;
function win() {
    if (cpt == 5) {
        const final = document.querySelector('.final');
        const finalinput = document.querySelector('.finalinput');
        const finalbtn = document.querySelector('.finalbtn');
        final.style.display = 'block';
        finalbtn.addEventListener('click', function () {
            if (finalinput.value == code) {
                overlay.style.opacity = '0';
                final.innerHTML = 'Bravo ! Vous avez réussi ! <br> La salle s\' est allumée !';
            }
        });
    }
}

function closeInfo() {
    info.style.display = 'none';
    open = false;
}

document.addEventListener('mousemove', function (e) {
    overlay.style.cursor = 'none';
    if (!open) {
        overlay.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 50px, #000 100px)`;
    }
});

function openInfo(message, numToUpdate, btn, falseBtn, enigmeFlag, numpart) {
    open = true;
    info.style.display = 'block';
    info.innerHTML = message + info.innerHTML;
    const exit = document.querySelector('.exit');
    const input = document.querySelector('.ipt');
    const submit = document.querySelector('.valid');
    
    exit.addEventListener('click', function (event) {
        closeInfo();
    });

    submit.addEventListener('click', function () {
        if (input.value == numpart) {
            numToUpdate.innerHTML = numpart;
            btn.style.display = 'none';
            falseBtn.style.display = 'none';
            enigmeFlag = true;
            cpt++;
            console.log(cpt);
            win();
            closeInfo();
        } else {
            openInfo('Mauvaise réponse !<br>', numToUpdate, btn, falseBtn, enigmeFlag, numpart);
        }
    });
}

btn1.addEventListener('click', function () {
    console.log(enigme1 + ' ' + enigme2 + ' ' + enigme3 + ' ' + enigme4 + ' ' + enigme5);
    openInfo('Munissez-vous de votre boussole !<br>', num5, btn1, false1, enigme1, '13');
});

btn2.addEventListener('click', function () {
    console.log(enigme1 + ' ' + enigme2 + ' ' + enigme3 + ' ' + enigme4 + ' ' + enigme5);
    openInfo('Regarder derrière le tableau !<br>', num4, btn2, false2, enigme2, '67');
});

btn3.addEventListener('click', function () {
    console.log(enigme1 + ' ' + enigme2 + ' ' + enigme3 + ' ' + enigme4 + ' ' + enigme5);
    openInfo('Vous ne trouvez pas qu\'il fait chaud ?<br>', num1, btn3, false3, enigme3, '06');
});

btn4.addEventListener('click', function () {
    console.log(enigme1 + ' ' + enigme2 + ' ' + enigme3 + ' ' + enigme4 + ' ' + enigme5);
    openInfo('Trouvez le bon ordi dans le bon sac !<br>', num2, btn4, false4, enigme4, '34');
});

btn5.addEventListener('click', function () {
    console.log(enigme1 + ' ' + enigme2 + ' ' + enigme3 + ' ' + enigme4 + ' ' + enigme5);
    openInfo('Regardez bien toute la table !<br>', num3, btn5, false5, enigme5, '78');
});
