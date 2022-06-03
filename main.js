let adviceIDDOM = document.getElementById('adviceID');
let adviceTextDOM = document.getElementById('advice-text');
let moreBtn = document.getElementById('more-advice-btn');

function randomAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        let advice = data.slip.advice;
        let adviceNumber = data.slip.id;

        adviceIDDOM.innerHTML = `#${adviceNumber}`;
        adviceTextDOM.innerHTML = `"${advice}"`;
    });
}

randomAdvice();

moreBtn.addEventListener('click', randomAdvice);