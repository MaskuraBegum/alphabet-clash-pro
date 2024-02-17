function hideAnElement(hideFiled){
    hide = document.getElementById(hideFiled);
    hide.classList.add('hidden');
}
function showAnElement(showFiled){
    show = document.getElementById(showFiled);
    show.classList.remove('hidden');
}
function play(){
    hideAnElement('home');
    hideAnElement('score')
    showAnElement('playground');
    loopGame();
}
function generateRandomNumber(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyx'
    alphabet = alphabet.split('');
    let number = Math.round(Math.random()*25);
    return (alphabet[number]);
}

function loopGame(){
    const TheAlphabet = generateRandomNumber();
    setIt = document.getElementById('the-alphabet');
    setIt.innerText = TheAlphabet;
    setBackground(TheAlphabet);
}
function setBackground(alpha){
    color = document.getElementById(alpha);
    color.classList.add('bg-orange-400');
}
function removeBackground(alpha){
    removeColor = document.getElementById(alpha);
    removeColor.classList.remove('bg-orange-400');
}
function keypressHandle(event){
    const gamer = event.key;
    console.log(gamer);
    const expected = document.getElementById('the-alphabet');
    if(expected.innerText == gamer){
        currentScore = document.getElementById('current-score');
        toInt = parseInt(currentScore.innerText);
        score = toInt + 1;
        currentScore.innerText = score;

        removeBackground(expected.innerText);
        loopGame();
    }
    else{
        currentLife = document.getElementById('current-life')
        toIntLife = parseInt(currentLife.innerText);
        life = toIntLife -1;
        currentLife.innerText = life;
        if(life == 0){
            hideAnElement('playground')
            showAnElement('score')
            currentScore = document.getElementById('current-score');
            finalScore = document.getElementById('final-score');
            finalScore.innerText = currentScore.innerText;
            currentScore = document.getElementById('current-score');
            currentScore.innerText = '0';
            currentLife = document.getElementById('current-life');
            currentLife.innerText = '3';

            lastalpha = document.getElementById('the-alphabet')
            removeBackground(lastalpha.innerText);
            score = 0;
        }

    }
}
document.addEventListener('keyup', keypressHandle)

