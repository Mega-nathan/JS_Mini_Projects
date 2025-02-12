let findvalue=Math.trunc(Math.random()*20)+1;
const body=document.querySelector('.bg-container');
let score=20;
let gameover=false;
const close=document.querySelector('.close-about');
const aboutgame=document.querySelector('.about');

document.querySelector('.check').addEventListener('click',function(){
    console.log(findvalue);
    let values=Number(document.querySelector('.text-input').value);
    console.log("value",values);
    
    if(!gameover && score>0 && values>0){
        if(values===findvalue){
            document.querySelector('.score').textContent=score;
            document.querySelector('.guess').textContent="Correct Number 🎉🎖️ ";
            body.style.backgroundColor='#60b347';
            gameover=true;
            const highscore=Number(document.querySelector('.highscore').textContent);
            if(score>highscore){
                document.querySelector('.highscore').textContent=score;
            }
        }
        else if(values>findvalue){
            document.querySelector('.guess').textContent="Too High 📈 ";
            score-=1;
            document.querySelector('.score').textContent=score;
        }
        else if(values<findvalue){
            document.querySelector('.guess').textContent="Too Low 📉 "; 
            score-=1;
            document.querySelector('.score').textContent=score;
        }
        if(score==0){
            document.querySelector('.score').textContent=score;
            body.style.backgroundColor='crimson';
            document.querySelector('.guess').textContent='Sorry You Have Lost! 😑';
        }
        document.querySelector('.text-input').value='';
    }
    else if(!values){
        alert('Enter a input')
    }
    
});


document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.text-input').value='';
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').textContent="Guess My Number ";
    findvalue=Math.trunc(Math.random()*20)+1;
    body.style.backgroundColor=' #1E1E2F';
    gameover=false;
});

document.querySelector('.close-about').addEventListener('click',function(){
    console.log('Close clicked');
    aboutgame.classList.add('hidden');
    document.querySelector('.totals').classList.remove('hidden');
});

document.querySelector('.bg-about-game').addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector('.totals').classList.add('hidden');
    aboutgame.classList.remove('hidden');
    
});