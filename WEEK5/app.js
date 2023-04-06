// 1. js 파일에서 접근해야하는 html dom 요소들 선언하기
const myHandText = document.getElementById('my-hand-text');
const myHandIcon = document.getElementById('my-hand-icon');

const computerText = document.getElementById('computer-hand-text');
const computerIcon = document.getElementById('computer-hand-icon');

const result = document.getElementById('display-result');

const rockBtn = document.getElementById('rock')
const scissorsBtn = document.getElementById('scissors')
const paperBtn = document.getElementById('paper')

//리셋버튼 요소 가져오기
const resetbutton = document.getElementById('reset-button');

//내 점수와 컴퓨터 점수 요소 가져오기 
const myScoreElement = document.getElementById('my-score');
const computerScoreElement = document.getElementById('computer-score');

//처음 점수는 모두 0
let myScore = 0;
let computerScore = 0;


//2. 선언한 dom 요소에 클릭이벤트 주기
rockBtn.addEventListener('click', displayMyChoice);
scissorsBtn.addEventListener('click', displayMyChoice);
paperBtn.addEventListener('click', displayMyChoice);

let prevClickedBtn = null;

//3. 함수가 실행될 때, 이벤트가 발생한 dom 객체에 접근하기(e.target)
function displayMyChoice(e){
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target;
    
    //다크모드 적용하기
    if(prevClickedBtn !== null){
        prevClickedBtn.classList.remove('dark-mode');
    }

    e.currentTarget.classList.add('dark-mode');

    prevClickedBtn = e.currentTarget;

    //4)-1 innerHTML 실습할 때 typeof 사용해서 객체 타입 보여주기
    // console.log(clickedBtn);
    // console.log(clickedIcon);

    //4. innerHTML, innerText 실습
    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon.className;



    startGame(clickedBtn);  
}

function getComChoice(){
    //배열의 [0]에는 text, [1]에는 className
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex=Math.floor(Math.random()*3);

    return randomValue[randomIndex];
}

function displayComChoice(result){
    computerText.innerText = result[0];
    computerIcon.className = result[1];

    console.log(computerIcon.className);

}


function startGame(myChoice) {
    let resultArr = getComChoice();
    let comChoiceText = resultArr[0];
    
    switch (myChoice[0]+comChoiceText[0][0]){
        case "rs":
        case 'sp':
        case 'pr':
            result.innerText='win';
            document.querySelector('.my-score').innerText = parseInt(document.querySelector('.my-score').innerText) + 1; // my-score 증가
            break;
        
        case "rr":
        case 'ss':
        case 'pp':
            result.innerText='tie';
            break;
        
        case "rp":
        case "sr":
        case "ps":
            result.innerText='lose';
            document.querySelector('.computer-score').innerText = parseInt(document.querySelector('.computer-score').innerText) + 1; // computer-score 증가
            break;
    }

    displayComChoice(resultArr);

}

  
//리셋 버튼 누르면 0으로 변경 
resetbutton.addEventListener('click', function() {
    document.querySelector('.my-score').innerText = 0;
    document.querySelector('.computer-score').innerText = 0;
  });