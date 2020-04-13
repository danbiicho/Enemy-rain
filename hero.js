const backImg = document.getElementById('bg');

const hero = document.getElementById('hero');
let leftValue = getComputedStyle(hero).left;
let goLeft = parseInt(leftValue);

function create() {
    const enemy = document.createElement('div');
    enemy.className = 'enemy';
    backImg.append(enemy);
    let random = getRandomInt(0, 600);
    enemy.style.left = random + "px";

    function move() {
        enemy.style.top = 0; 
        let stop = setInterval(function() {                 
            const topValue = enemy.style.top;            
            let goDown = parseInt(topValue);           
            goDown = goDown + 30;
            enemy.style.top = goDown + "px"; 

            if (goDown >= 486) {
                if  ((random < goLeft) && (goLeft < random + 125)){
                    let enemyKill = setTimeout(function() {      
                        enemy.style.backgroundPositionX = "-44px";
                        clearInterval(stop); 
                        setTimeout( () => {enemy.remove()}, 500);                          
                    }, 100); 
                }
            }
            if (goDown >= 530) {                
                clearInterval(stop); 
                setTimeout( () => {enemy.remove()}, 500);                  
            }

        }, 1000);
    }

    move();
}


setInterval(function() {
    create();
}, 3000);




document.addEventListener("keydown", keyDown);   

function keyDown(e) {        
    if((e.keyCode == 37) && (10 < goLeft)) {
        hero.style.backgroundPositionX = "70px"
        goLeft = goLeft -10;
        //console.log(goLeft);
        hero.style.left = goLeft + "px";             

    } else if((e.keyCode == 39) && (goLeft < 790)){
        hero.style.backgroundPositionX = "35px";
        goLeft = goLeft + 10;  
        hero.style.left = goLeft + "px";
        //console.log(goLeft);

    } else if(e.keyCode == 40) {
        hero.style.backgroundPositionX = "0px";
    }
}


// let randomEnemy = setInterval(function() {
//     const newEnemy = document.createElement('div');
//     newEnemy.className = 'enemy';   
//     backImg.append(newEnemy);   
//     enemy.style.left = random + "px";     
// } ,3000);

function getRandomInt(min, max) {        
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
} 


/*
if(y축이 머리 위까지 떨어졌을 때){
    if(x 축이 hero 기준으로 닿는 위치에 있을 때 ) {
        죽는다
    } else (
        계속 떨어지다가
        if(땅 에 닿으면){
            떨어지는 거 멈추고 몇 초 뒤에 사라진다.
        }

    )
}
*/






// let playEnemy = setInterval(function() {   
    
//     goDown = goDown + 40;
//     //console.log(enemy.style.left);
//     enemy.style.top = goDown + "px";      

//     if (goDown > 520) {
//         let enemyKill = setTimeout(function() {            
//             enemy.style.backgroundPositionX = "-44px";           
//          }, 1000); 
//         clearInterval(playEnemy);               
//     }
// }, 700);
//enemy.remove();   
