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