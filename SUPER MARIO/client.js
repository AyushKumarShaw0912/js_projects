maxscore = 0
score = 0
cross = true
user = prompt("Enter Your Name:")
document.onkeydown = function (e) {
    console.log(e)
    scorecont = document.querySelector('.scorecont')
    scorecont.style.visibility = "visible"
    if (e.key == 'ArrowUp') {
        mario = document.querySelector('.mario');
        mario.classList.add('animatemario');
        setTimeout(() => {
            mario.classList.remove('animatemario')
        }, 700)
        console.log(e)
    }
    if (e.key == 'ArrowRight') {
        mario = document.querySelector('.mario');
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'))
        mario.style.left = mariox + 112 + 'px';
    }
    if (e.key == 'ArrowLeft') {
        mario = document.querySelector('.mario');
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'))
        mario.style.left = mariox - 112 + 'px';
    }
}
setInterval(() => {
    mario = document.querySelector('.mario');
    gameOver = document.querySelector('.gameover');
    pika = document.querySelector('.pika');
    maxScore = document.querySelector('.maxScore')
    dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('bottom'));
    ox = parseInt(window.getComputedStyle(pika, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(pika, null).getPropertyValue('bottom'));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 25 && offsetY < 20) {
        pika.classList.remove('pikaAnimate')
        gameOver.innerHTML = "Oops!Game over - Refresh again"
        max(maxscore)
        maxScore.style.visibility = "visible"

    }
    else if (offsetX < 143 && cross) {
        score += 1
        updateScore(score)
        max(maxscore)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(pika, null).getPropertyValue('animation-duration'));
            newDur = anidur - 0.8;
            pika.style.animationDuration = newDur + 's'
        }, 500);

    }



}, 10);
function updateScore(score) {
    scorecont = document.querySelector('.scorecont')
    scorecont.innerHTML = user + "  's   Score :" + score;
}
function max(maxscore) {
    maxScore = document.querySelector('.maxScore')
    if (score > maxscore)
        maxscore = score;
    maxScore.innerHTML = "Max Score is:" + maxscore

}