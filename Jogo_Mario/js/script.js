const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const moeda = document.querySelector('.moeda');
const gameov = document.querySelector ('.gameov');

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const pipePosicao = pipe.offsetLeft
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '')
    const moedaPosicao = moeda.offsetLeft

    console.log(marioPosicao)

    if (pipePosicao <= 120 && pipePosicao > 0 && marioPosicao < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosicao}px`

        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosicao}px`

        moeda.style.animation = 'none'
        moeda.style.left = `${moedaPosicao}px`

        gameov.style.display = 'block'; 

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)