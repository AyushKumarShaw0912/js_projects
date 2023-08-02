let c = 0
cross = true
document.addEventListener('click',game)
function game(){
    
    player = document.getElementById('player')
    ball = document.getElementById('ball')
    keeper = document.getElementById('keeper')
    start=document.querySelector('.txtcenter')
    gameOver = document.querySelector('.gameOver')
    cr=document.getElementById(cr)
    setTimeout(() => {
        ball.style.visibility="visible"
    keeper.style.visibility="visible"
    player.style.visibility="visible"
    gameOver.style.visibility="hidden"
    cr.style.visibility="hidden"
    }, 1000);
    
}

document.onkeydown = function (e) {
    if (e.key == 'ArrowRight') {
        player = document.getElementById('player')
        ball = document.getElementById('ball')
        keeper = document.getElementById('keeper')
        ball.classList.add('ballmid')
        let x = Math.floor((Math.random() * 3) + 1);
        console.log(x)
        if (x == 1) {
            keeper = document.getElementById('keeper')
            keeper.classList.add('keepertop')
            setTimeout(() => {
                keeper.classList.remove('keepertop')
            }, 1000);
        }
        else if (x == 2) {
            keeper = document.getElementById('keeper')
            keeper.classList.add('keeperbottom')
            setTimeout(() => {
                keeper.classList.remove('keeperbottom')
            }, 1000);
        }
        else if (x == 3) {
            keeper = document.getElementById('keeper')
        }
        setTimeout(() => {
            ball.classList.remove('ballmid')
        }, 1000);
    }
    if (e.key == 'ArrowUp') {
        player = document.getElementById('player')
        ball = document.getElementById('ball')
        keeper = document.getElementById('keeper')
        ball.classList.add('ballleft')
        let x = Math.floor((Math.random() * 3) + 1);
        console.log(x)
        if (x == 1) {
            keeper = document.getElementById('keeper')
            keeper.classList.add('keepertop')
            setTimeout(() => {
                keeper.classList.remove('keepertop')
            }, 1000);
        }
        else if (x == 2) {
            keeper = document.getElementById('keeper')
            keeper.classList.add('keeperbottom')
            setTimeout(() => {
                keeper.classList.remove('keeperbottom')
            }, 1000);
        }
        else if (x == 3) {
            keeper = document.getElementById('keeper')
        }

        setTimeout(() => {
            ball.classList.remove('ballleft')
        }, 1000);
    }
    if (e.key == 'ArrowDown') {
        player = document.getElementById('player')
        ball = document.getElementById('ball')
        keeper = document.getElementById('keeper')
        ball.classList.add('ballright')
        let x = Math.floor((Math.random() * 3) + 1);
        console.log(x)
        if (x == 1) {
            keeper = document.getElementById('keeper')
            keeper.classList.add('keepertop')
            setTimeout(() => {
                keeper.classList.remove('keepertop')
            }, 1000);
        }
        else if (x == 2) {
            keeper = document.getElementById('keeper')
            keeper.classList.add('keeperbottom')
            setTimeout(() => {
                keeper.classList.remove('keeperbottom')
            }, 1000);
        }
        else if (x == 3) {
            keeper = document.getElementById('keeper')
        }
        setTimeout(() => {
            ball.classList.remove('ballright')
        }, 1000);
    }
}
setInterval(() => {
    player = document.getElementById('player')
    ball = document.getElementById('ball')
    keeper = document.getElementById('keeper')
    goal = document.querySelector('.goal')
    bx = parseInt(window.getComputedStyle(ball, null).getPropertyValue('right'));
    by = parseInt(window.getComputedStyle(ball, null).getPropertyValue('top'));
    gx = parseInt(window.getComputedStyle(keeper, null).getPropertyValue('right'));
    gy = parseInt(window.getComputedStyle(keeper, null).getPropertyValue('top')); 

    offsetX = Math.abs(bx - gx);
    offsetY = Math.abs(by - gy);

    if (offsetX < 32 && offsetY < 20) {
        ball.classList.remove('ballleft')
        ball.classList.remove('ballmid')
        ball.classList.remove('ballright')
        goal.innerHTML = "Oops!!"
        console.log("bx" + bx)
        console.log("bx" + bx)
        console.log("by" + by)
        console.log("gy" + gy)
        c = c + 1
        setTimeout(() => {
            goal.innerHTML = ""
        }, 2000);


    }

    else if (offsetX < 22 && offsetY>20) {
        goal.innerHTML = "Gooal!!!"
        console.log("by" + by)
        console.log("gy" + gy)
        setTimeout(() => {
            goal.innerHTML = ""
            cross = false
        }, 2000);
    }

}, 1);
